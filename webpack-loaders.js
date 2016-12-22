const PATHS = require('./webpack-paths');

/* to define the loader:
  - 'use' instead of 'loaders'
  - must complete the loader name with -loader
  - preLoaders are now defined like normal loader but have 'enforce' set to 'pre'
*/

exports.babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader'
};

exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: PATHS.css
}

exports.eslint = function(path) {
  return {
      test: /\.jsx?$/,
      loaders: ['eslint-loader'],
      enforce: "pre",
      include: path
  };
}
