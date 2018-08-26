var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'bundle.css'
});

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
    bootstrap: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    jquery: './node_modules/jquery/dist/jquery.min.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: __dirname + '/index.html',
      inject: 'body'
    })
  ]
};