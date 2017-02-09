var path = require('path');
var webpack = require('webpack');
var appBase = path.resolve(__dirname, '../app');

module.exports = {
	context: appBase,
	entry: ['./app.js'],
	output: {
		path: appBase,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	devtool: 'eval',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js?$/,
			loaders: ['babel'],
			include: path.resolve(__dirname, '../app')
		}]
	}
};