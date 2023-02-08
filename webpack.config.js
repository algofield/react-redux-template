const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((acc, next) => {
    acc[`process.env.${next}`] = JSON.stringify(env[next]);
    return acc;
  }, {})
  return {
    mode: process.env.NODE_ENV,
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
      new webpack.DefinePlugin(envKeys),
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
};