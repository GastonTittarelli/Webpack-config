const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), 
        },
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
        ],
    },
});