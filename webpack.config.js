'use strict';
var argv = require('yargs').argv;
var path = require('path');
var webpack = require('webpack');
var gulpMux = require('gulp-mux');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');

var target = process.env.TARGET || 'app';
var port = process.env.PORT || 5000;
var host = process.env.HOST || 'localhost';
var mode = process.env.MODE || 'dev';
var clientFolder = 'client';
var distFolder = 'dist';
var distFolder = 'dist' + '/' + target + '/' + mode;
var suffix = gulpMux.targets.targetToSuffix(target);


var pluginsProd = mode === 'prod' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        output: {
            comments: false
        },
        compress: {
            warnings: false
        }
    })
] : [];

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        //'vendor':  './' + clientFolder + '/scripts/' + target + '/vendor',
        'bundle': './' + clientFolder + '/scripts/' + target + '/bootstrap'
    },

    output: {
        path: __dirname + '/' + distFolder + '/',
        publicPath: distFolder + '/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js',
        devtoolModuleFilenameTemplate: function(info) {
            //return 'scripts/app' + info.resourcePath.replace(__dirname, '../..').replace(/~/g, '/node_modules/');
            return info.resourcePath.replace(clientFolder + '/' + 'scripts', '').replace(/~/g, '/node_modules/');
        },
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint-loader'
        }],
        loaders: [{
                test: /\.ts$/,
                loader: 'ts',
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            },
            // Support for *.json files.
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // Support for CSS as raw text
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            // support for .html as raw text
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.png$/,
                loader: 'url-loader?prefix=img/&limit=5000'
            }, {
                test: /\.jpg$/,
                loader: 'url-loader?prefix=img/&limit=5000'
            }, {
                test: /\.gif$/,
                loader: 'url-loader?prefix=img/&limit=5000'
            }, {
                test: /\.woff$/,
                loader: 'url-loader?prefix=font/&limit=5000'
            }, {
                test: /\.eot$/,
                loader: 'file-loader?prefix=font/'
            }, {
                test: /\.ttf$/,
                loader: 'file-loader?prefix=font/'
            }, {
                test: /\.svg$/,
                loader: 'file-loader?prefix=font/'
            }
        ],
        noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
    },
    tslint: {
        emitErrors: false,
        failOnHint: false
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env so this is easy to customize.
        host: host,
        port: port
    },
    plugins: [
        // new CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor.js',
        //     minChunks: Infinity
        // }),
        // new CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'common.js',
        //     minChunks: 2,
        //     chunks: ['vendor'] //'bundle', 
        // }),
        new CopyWebpackPlugin([{
            from: clientFolder + '/index' + suffix + '.html'
        }], {
            ignore: ['*.ts']
        })
    ].concat(pluginsProd)
}
