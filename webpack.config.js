const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    client: path.join(__dirname, 'src', 'client', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  devServer: {
    port: 8080,
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'templates', 'index.ejs'),
      filename: 'index.html',
      inject: 'body',
      // minify: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'style-loader',
        ],
      }
    ]
  }
};