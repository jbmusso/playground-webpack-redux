var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('../webpack.config');

var options = {
  contentBase: path.join(__dirname, '../dist'),
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true
  }
};

var server = new WebpackDevServer(webpack(webpackConfig), options);

server.listen(3000, 'localhost', function (err) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});
