const config = require('./config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(config, {
  entry: {
    index: './src/front/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../../build/'),
    filename: '[name].js',
  },
});