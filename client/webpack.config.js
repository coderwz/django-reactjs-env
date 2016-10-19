var Webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');

var uglifyJsPlugin = Webpack.optimize.UglifyJsPlugin;
var buildPath = path.resolve(__dirname, '../server/static');


module.exports = {
    context: __dirname,
    devtool: 'eval',
    entry: './main.js',
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            },
            {
                test: /\.less$/,
                loader: 'style!css!less!'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new BundleTracker({
            path: buildPath,
            filename: 'webpack-stats.json'
        })
    ],
};