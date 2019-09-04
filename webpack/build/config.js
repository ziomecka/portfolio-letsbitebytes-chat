const postcssFlexbugs = require('postcss-flexbugs-fixes');
const postcssLost = require('lost');
const postcssImport = require('postcss-import');
const postcssNext = require('postcss-cssnext');
const cssDeclarationSorter = require('css-declaration-sorter');
const cssMqpacker = require('css-mqpacker');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    mainFiles: ['index'],
    modules: [ 'node_modules' ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssFlexbugs(),
                postcssLost(),
                postcssImport(),
                postcssNext({
                  browsers: ['last 2 version', 'Safari 7', 'ie 10'],
                }),
                cssDeclarationSorter({
                  order: 'concentric-css',
                }),
                cssMqpacker(),
              ],
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};