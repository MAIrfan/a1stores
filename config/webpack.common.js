const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../', 'src/index.js'),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // matches .js, .ts, .jsx and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.(s?)css$/, //matches .css and .scss files only
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // Clear our distribution folder before we build.
    new CleanWebpackPlugin(),
    // Shows the progress of the build
    new webpack.ProgressPlugin(),
    // Load our environment configuration
    new Dotenv(),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // set the current working directory for displaying module paths
      cwd: path.resolve(__dirname, '/'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/index.html'), // base html
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },
};
