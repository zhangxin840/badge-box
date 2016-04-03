var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/browser/client.js',
    output: {
        path: './build/public/assets',
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
            // WARNNING: ExtractTextPlugin must be the single loader
            loader: ExtractTextPlugin.extract('css!postcss-loader?parser=postcss-scss')
            // loaders: [
            //     'style-loader',
            //     'css-loader',
            //     'postcss-loader?parser=postcss-scss'
            // ]
        }]
    },
    postcss: function (webpack) {
        return [
            // WARNING: The order matters
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
