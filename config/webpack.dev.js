const path = require('path');

module.exports = {
    entry: {
        main: ["./src/index.js"]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        static: "dist"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
        }]
    }
}