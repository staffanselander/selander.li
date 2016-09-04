"use strict";

require('dotenv').config();

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

const helper = require('../helper');

module.exports = {
    env: process.env,

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.ts',
        // 'styles': './src/styles/main.scss'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json'],

        root: helper.root('src'),

        modulesDirectories: ['node_modules']
    },

    plugins: [
        new CleanWebpackPlugin([helper.root('build')], {
            root: helper.root('')
        }),

        new ForkCheckerPlugin(),

        new webpack.optimize.OccurenceOrderPlugin(true),

        new webpack.DefinePlugin(
            helper.makeUndestandableObject(helper.generateEnv())
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),

        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            process: {
                env: helper.generateEnv()
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // {
            //     test: /\.css$/,
            //     loaders: ['to-string-loader', 'css-loader']
            // },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helper.root('src/index.html')]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css!sass")
            },
            // {
            //     test: /app.*\.less$/,
            //     loader: 'raw-loader!sass-loader'
            //     // include: './src/assets/main.less'
            // },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    }
}