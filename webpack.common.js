const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); 

module.exports = {
    entry: {
        idex: { 
            import: './src/js/index.js', 
            dependOn: "shared" 
        },
        sum: {
            import: './src/js/sum.js', 
            dependOn: "shared"
        },
        shared: "lodash",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};