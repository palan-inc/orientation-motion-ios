'use strict';

var path = require('path');

module.exports = {
  entry: {
    './dist/index.js': './src/index.js',
    './dist/orientation-motion-ios.min.js': './src/index.js',
  },
  output: {
    filename: '[name]',
    path: __dirname,
    libraryTarget: 'umd',
    library: 'orientation-motion-ios',
  },
};