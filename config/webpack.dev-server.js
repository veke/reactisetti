var chalk = require('chalk');
var path = require('path');
var util = require('util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 8080;
var host = 'localhost';

config.entry.push(util.format('webpack-dev-server/client?http://%s:%d', host, port));
config.entry.push('webpack/hot/dev-server');

var server = new WebpackDevServer(webpack(config), {
	contentBase: path.resolve(__dirname, '../app'),
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
});

server.listen(port, host, function(err) {
	if (err) {
		console.log(err);
	}
	console.log(chalk.green('Listening at ' + host + ':' + port));
});
