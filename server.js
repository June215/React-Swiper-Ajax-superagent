var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.debug.js'); //use './webpack.config' for Mimiron debug, './webpack.config.bss' to debug BSS

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '10.5.10.105', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 10.5.10.105:3000');
});
