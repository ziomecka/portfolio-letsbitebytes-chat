const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  target: 'node',
  entry: './src/back/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist/back'),
    filename: 'server.js',
  },
});