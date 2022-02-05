// This whole file is a blueprint of how webpack should interact with the rest of the project

const path = require('path');
const  webpack  = require('webpack');

module.exports = {
    // address to the directory that I want to enter
  entry: './assets/js/script.js',
    // output the resulting bundled code to the specified locations (path) with the specified name (filename)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
    // plugins can allow use of other npm packages, like jquery in this case
    // I needed to add jqeury to the plugins because it has native variables that webpack doens't understand natively
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],

    // webpack runs in production mode by default. That mode minifies code automatically
    // development offers hot reloading of webpack and some debugging features
  mode: 'development'
};