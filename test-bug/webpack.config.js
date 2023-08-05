const path = require('path');

module.exports = {
  entry: './src.js',
  output: {
    filename: 'mathjax.plugin.js',
    path: path.resolve(__dirname, 'out'),
  },
};
