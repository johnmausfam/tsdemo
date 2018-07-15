var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase:'dev/', /* dev-server root dir */
    hot: true,
    inline :true,
    lazy: false,
    publicPath: config.output.publicPath, /* entry dir */
    stats: { colors: true }
});
server.listen(3000);