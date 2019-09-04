const build = require('../build/');
const config = require('./config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(build, config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../deploy/'),
    filename: '[name].js',
  },
});