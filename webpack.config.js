const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    //input
    context: __dirname + '/src',
    entry: {
        main: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'reactDOM'
        }),
        //new webpackAnalyzer()
    ],

    //transformations
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        contentBase: path.resolve(__dirname, '/src'),
        compress: true,
        port: 9000
    }
};

module.exports = config;
