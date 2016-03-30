var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/client.js',
    output: {
        path: './public/assets',
        filename: 'main.js',
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'react',
                    'es2015'
                ]
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader?parser=postcss-scss'
                // ExtractTextPlugin.extract('style-loader',
                //     ['css-loader', 'postcss-loader?parser=postcss-scss'])
            ]
        }]
    },
    postcss: function (webpack) {
        return [
            require('postcss-import')({
                addDependencyTo: webpack
            }),
            require('precss')(),
            require('autoprefixer')()
        ];
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3100,
            proxy: 'http://localhost:3000/'
        })
    ]
};
