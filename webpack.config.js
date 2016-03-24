const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

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
                'postcss-loader?parser=postcss-scss',
            ],
        }]
    },
    postcss: function () {
        return [
            require('precss')(),
            require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
        ];
    }
};
