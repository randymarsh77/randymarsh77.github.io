import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
	entry: path.resolve(__dirname, 'src/index.jsx'),
	resolve: {
		extensions: ['.html', '.js', '.jsx', '.less'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							presets: [
								['es2015', { modules: false }],
								'react',
								'stage-1',
							],
						},
					},
				],
			},
			{
				test: /\.less$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' },
				],
			},
		],
	},
});
