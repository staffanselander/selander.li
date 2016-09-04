/*jslint node: true */
"use strict";

var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var CompressionPlugin = require('compression-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash    = require('webpack-md5-hash');

var WebpackConfiguration = require('webpack-config');
var webpack = require('webpack');

var helper = require('../helper');

module.exports = new WebpackConfiguration.Config().extend('./config/webpack/default').merge({   

    debug: false,

    devtool: 'eval',

    output: {
        path: helper.root('build'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },

    plugins: [
        new WebpackMd5Hash(),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { 
                screw_ie8: true 
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),

        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            process: {
                env: process.env
            }
        })
    ],

    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    },

    node: {
        global: 'window',
        crypto: 'empty',
        process: false,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

});