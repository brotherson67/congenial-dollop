// This whole file is a blueprint of how webpack should interact with the rest of the project

const path = require('path');

module.exports = {
    // address to the directory that I want to enter
  entry: './assets/js/script.js',
    // output the resulting bundled code to the specified locations (path) with the specified name (filename)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
    // webpack runs in production mode by default. That mode minifies code automatically
  mode: 'development'
};