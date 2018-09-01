const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']), // Remove dist folder on each build
        new HtmlWebpackPlugin({ // Generate html for you on each build
            title: 'Development',
            template: './index.html'
        })
    ],
    devServer: { //Will serve files from dist on localhost:8080
        contentBase: './dist'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    }
};