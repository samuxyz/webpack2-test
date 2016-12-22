'user strict';

const loaders = require('./webpack-loaders');
const plugins = require('./webpack-plugins');
const PATHS = require('./webpack-paths');


const config = {
  entry: {
		app: PATHS.src
	},
	output: {
		path: PATHS.dist,
		filename: 'bundle.js'
	},
  module: {
    // 'rules' substitutes 'loaders'
    rules: [
      loaders.babel,
      loaders.css,
      loaders.eslint(PATHS.src)
    ]
  },
  plugins: [
    plugins.definePlugin,
    plugins.htmlPlugin,
    plugins.loaderOptionsPlugin,
    plugins.ugligyPlugin
  ],
  resolve: {
    // no need for the empty string extension
    extensions: ['.js', '.jsx']
  }
};


module.exports = config;
