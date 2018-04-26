const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST = path.resolve(__dirname, "./dist");
const RESOURCES = path.resolve(__dirname, "./resources");
const SOURCE = path.resolve(__dirname, "./source");

module.exports = {
    entry: path.join(SOURCE, "index.js"),

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.pug$/,
                use: "pug-loader"
            },
            {
                test: /\.(jpg|png|svg|eot|svg|ttf|woff|woff2|ico)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[hash].[ext]",
                },
            }
        ]
    },

    output: {
        path: DIST,
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Sample Application - Kiosked",
            baseURL: 'http://localhost:3000/',
            template: path.join(RESOURCES, "template.pug"),
            favicon: path.join(RESOURCES, "sample.ico"),
            publicPath: "",
            filename: "index.html",
            inject: "body"
        })
    ],

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

    target: "web"
};
