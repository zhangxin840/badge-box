var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
    entry: './src/browser/client.js',
    entry: {
        index: "./src/browser/home/index.js"
        // team: "./src/browser/team/team.js",
        // user: "./src/browser/user/user.js"
    },
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
            loader: ExtractTextPlugin.extract(
                    'css!postcss-loader?parser=postcss-scss')
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
            require('postcss-sassy-mixins')(),
            require('precss')(),
            require('autoprefixer')()
        ];
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3100,
            proxy: 'http://localhost:3000/'
        })
    ]
};
