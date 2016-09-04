"use strict";

require('dotenv').config();

const WebpackConfiguration = require('webpack-config');
const webpack = require('webpack');

const helper = require('../helper');

module.exports = new WebpackConfiguration.Config().extend('./config/webpack/default').merge({

    HMR: helper.processFlag('hot'),

    debug: true,

    devtool: 'cheap-module-source-map',

    module: {
        preLoaders: [
            // { 
            //     test: /\.ts$/, 
            //     loader: 'tslint', 
            //     exclude: [ 
            //         helper.root('node_modules')
            //     ] 
            // },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    helper.root('node_modules/rxjs'),
                    helper.root('node_modules/@angular'),
                    helper.root('node_modules/@ngrx'),
                    helper.root('node_modules/@angular2-material')
                ]
            }
        ],
    },

    output: {
        path: helper.root('build'),

        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',

        chunkFilename: '[id].chunk.js',
        library: 'ac_[name]',
        libraryTarget: 'var'
    },

    devServer: {
        host: process.env.DEV_SERVER_HOST,
        port: process.env.DEV_SERVER_PORT,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: helper.root('build')
    },

    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
})