const {join} = require('path');

module.exports = {
  entry: join(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: join(__dirname, './dist')
  },
}
