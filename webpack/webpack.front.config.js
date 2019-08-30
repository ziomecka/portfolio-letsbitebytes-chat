const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  entry: './src/front/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/front'),
    filename: 'index.js',
  },
});