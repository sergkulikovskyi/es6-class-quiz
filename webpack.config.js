var path = require('path');
var webpack = require('webpack');

var dir_js = path.resolve(__dirname, 'es6');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = [{
    target : 'web',
    entry : {
      TaObject:'./es6/taobject.jsx',
      Track:'./es6/track.jsx',
      Playlist:'./es6/playlist.jsx'
    },
    output: {
      filename: '[name].js',
      path: dir_build + '/js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    resolve: {
      extensions: ['.jsx', '.js']
    }
}, {
    target : 'web',
    entry: path.resolve(dir_js, 'main.jsx'),
    output: {
      filename: 'app.bundle.js',
      path: dir_build + '/js',
      library: 'Libpack',
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    resolve: {
      extensions: ['.jsx', '.js']
    }
    /*,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: true,
            },
        }),
    ]
    */
}]
