var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),	
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'Redux React Router Async Example',
      filename: 'index.html',
      template: 'src/index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/,
      	// See: https://github.com/webpack/extract-text-webpack-plugin/issues/30
      	// loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
      	loaders: ['style-loader', 'css-loader', 'cssnext-loader']
      },
      {
      	test: /\.js$/,
      	loaders: ['react-hot', 'babel'],
      	exclude: /node_modules/
      }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
