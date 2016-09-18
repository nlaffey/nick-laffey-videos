var webpack = require('webpack');

module.exports = {
    entry: {
        'main': "./index.js",
    },
    output: {
        path: __dirname + "/webpack_assets",
        filename: "bundle.js"
    },
    presets: ['es2015'],
    module:{
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css",'sass']
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /(node_modules)/,
                query: {presets: ['es2015']}
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=[path][name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
}
