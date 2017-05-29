'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'public/assets/'),
        filename: 'app.js',
        publicPath: '/assets/'
    },
    plugins: [
        // output a separate css bundle
        new ExtractTextPlugin('app.css'),

        // set node env
        new webpack.DefinePlugin({
                                     'process.env.NODE_ENV': JSON.stringify('development')
                                 })
    ],
    module: {
        loaders: [
            // transpiles JSX and ES6
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },

            // makes jQuery available to Bootstrap js
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },

            // extracts css as separate output file
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },

            // loads font icons for Bootstrap css
            {
                test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },

            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=img/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }

        ]
    },
    // needed to make request-promise work
    node: {
        net: 'empty',
        tls: 'empty'
    }
};
