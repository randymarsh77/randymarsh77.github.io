import { exec } from 'child_process';

function execAsync(command, options) {
	const promise = new Promise((resolve, reject) => {
		const proc = exec(`${command}`, options, (error, stdout, stderr) => {
			if (error) reject(stderr);
			resolve(stdout);
		});
		proc.stdout.pipe(process.stdout);
		proc.stderr.pipe(process.stderr);
	});
	return promise;
}

const [owner, repo] = process.env.TRAVIS_REPO_SLUG.split('/');

(async () => {
	const dir = await execAsync('pwd');
	console.log(`Deploying from ${dir}...`);

	// clone master branch
	console.log('  Cloning...\n');
	await execAsync(`git clone https://${owner}:${process.env.GitHubToken}@github.com/${owner}/${repo}.git`);

	// copy dist into the result, overwriting everything
	console.log('  Copying files...\n');
	await execAsync(`cp -a dist/. ${repo}/`);

	// push it up
	console.log('  Pushing...\n');
	await execAsync('git add *', { cwd: repo });
	await execAsync(`git config user.email ${process.env.GitHubEmail}`, { cwd: repo });
	await execAsync(`git config user.name ${process.env.GitHubName}`, { cwd: repo });
	await execAsync('git commit -m "Deploying :fingers-crossed:"', { cwd: repo });
	await execAsync('git push origin master', { cwd: repo });

	console.log('Finished!');
})();
