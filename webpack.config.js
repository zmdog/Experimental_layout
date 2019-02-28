const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        summary: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
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
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options : {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
            ]
    },
    plugins: [
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