const path = require('path'); //引入node的路径
const WebpackHtmlPlugin = require('html-webpack-plugin');//处理html
const Webpack = require('webpack');//引入webpack

// console.log(NODE_ENV, '=========666');

module.exports = {
    mode: 'development',

    // devtool: 'soucre-map',
    devtool: 'cheap-module-eval-source-map', 

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3001,
        host: 'localhost',

    },

    entry: {
        main: './src/index'
    },

    output: {
        filename: 'boundle.[hash:5].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        chunkFilename: 'js/chunk.[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {}
    },

    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /node_module/,
                include: path.resolve(__dirname, '../src'),
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new WebpackHtmlPlugin({
            template: './view/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}