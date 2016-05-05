var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
    entry: {
        index: "./src/browser/home/index.js",
        user: "./src/browser/user/user.js",
        team: "./src/browser/team/team.js"
    },
    output: {
        path: './build/public/assets',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
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
            test: /\.s?css$/,
            // WARNNING: ExtractTextPlugin must be the single loader
            loader: ExtractTextPlugin.extract(
                    'css!postcss-loader?parser=postcss-scss')
                // loaders: [
                //     'style-loader',
                //     'css-loader',
                //     'postcss-loader?parser=postcss-scss'
                // ]
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "file-loader?name=images/[name]-[hash].[ext]"
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=fonts/[name]-[hash].[ext]"
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
        new CommonsChunkPlugin({
            filename: "common.bundle.js",
            name: "common"
        }),
        new ExtractTextPlugin('[name].bundle.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3100,
            proxy: 'http://localhost:3000/'
        })
    ]
};
