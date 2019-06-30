const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        summary: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000
    },
    module: {
        rules:[

            {
                test: /\.css$/,
                loader:[
                    "style-loader",
                    miniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.png|ico$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                }
            },
            {
                test: /\.scss$/,
                loader:[
                    "style-loader",
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new miniCssExtractPlugin({filename: "[name].css"}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pug') + "/index.pug",
            inject: false
        })
    ],
    devServer: {
        overlay: true
    }
};