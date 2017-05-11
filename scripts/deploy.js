import { exec } from 'child_process';

function execAsync(command, options) {
	const promise = new Promise((resolve, reject) => {
		exec(`${command}`, options, (error, stdout, stderr) => {
			if (error) reject(stderr);
			resolve(stdout);
		});
	});
	return promise;
}

const [owner, repo] = process.env.TRAVIS_REPO_SLUG.split('/');

(async () => {
	const dir = await execAsync('pwd');
	console.log(`Deploying from ${dir}...`);

	// clone master branch
	console.log('  Cloning...\n');
	await execAsync(`git clone https://github.com/${owner}/${repo}.git`);

	// copy dist into the result, overwriting everything
	console.log('  Copying files...\n');
	await execAsync(`cp -r dist/ ${repo}/`);

	console.log('debug log');
	await execAsync('ls -la', { cwd: repo });
	await execAsync('git status', { cwd: repo });

	// push it up
	console.log('  Pushing...\n');
	await execAsync('git add *', { cwd: repo });
	await execAsync('git status', { cwd: repo });
	await execAsync('git commit -m "Deploying, :fingers-crossed:"', { cwd: repo });
	await execAsync('git push origin master', { cwd: repo });

	console.log('Finished!');
})();
