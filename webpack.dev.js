const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    // 'style-loader',

                    // 'css-loader',
                    // 'postcss-loader',
                    // 'sass-loader',
                    { loader: 'css-loader', options: { sourceMap: true }},
                    { loader: 'postcss-loader', options: { sourceMap: true }},
                    { loader: 'sass-loader', options: { sourceMap: true }},
                ]
            }
        ]
    },
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
    ]
}