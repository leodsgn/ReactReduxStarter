const webpack = require("webpack");
const path = require("path");
const koutoSwiss = require("kouto-swiss");
const rupture = require("rupture");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // context: path.resolve(__dirname, "src"),

    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        "./src/index.jsx"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
        
    },

    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    },

    devtool: "sourcemap",

    module: {
        rules: [
            {
                test: /\.js/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.styl/,
                loaders: ["style-loader", "css-loader", {
                    loader: "stylus-loader",
                    options: {
                        use: [koutoSwiss(), rupture()]
                    }
                }],
            }
        ],
    },

    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        publicPath: '/'
        
    },

    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/
    // },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html"
        })
    ]
}