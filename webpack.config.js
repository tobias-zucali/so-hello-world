var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}}
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),   // keine Änderung ;-(
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 100000 }),
        new webpack.optimize.CommonsChunkPlugin("commons.chunk.js")
    ]
};
