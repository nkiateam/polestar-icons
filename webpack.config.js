const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

let port = 3000;

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'examples/src/index.js')
    },
    
	output: {
        filename: '[name].js',
		path: path.resolve(__dirname, 'examples/build'),
        publicPath: '/examples/'
    },

    devtool: 'inline-source-map',

	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
            // file-loader
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            // url-loader
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ]
    },

    resolve: {
        alias: {
            'polestar-icons': path.resolve(__dirname, 'src/index.js'),
            'styles': path.resolve(__dirname, 'src/css')
        }
    },
    
    devServer: {
        inline: true,
        host: 'localhost',
        port: port,
        contentBase: path.resolve(__dirname, 'examples'),
        historyApiFallback: true,
    }
};
