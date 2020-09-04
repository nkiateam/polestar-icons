const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const postcssFlexbugs = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const eslintFormatter = require.resolve('react-dev-utils/eslintFormatter');

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');

const devMode = process.env.NODE_ENV !== 'production';
const port = 4100;
const publicPath = devMode ? '/' : '/polestar-icons/examples/build/';

// let publicPath = '/build/';

// if(process.env.NODE_ENV === 'production') {
//     publicPath = './build/';
// }

module.exports = {
    mode: devMode ? 'development' : 'production',

    entry: {
        app: [
            devMode && require.resolve('react-dev-utils/webpackHotDevClient'),
            // require.resolve('@babel/polyfill'),
            path.resolve(__dirname, 'examples/src/index.js'),
        ].filter(Boolean),
    },

    output: {
        filename: devMode ? '[name].js' : '[name].[contenthash:8].js',
        chunkFilename: devMode ? '[name].chunk.js' : '[name].[contenthash:8].chunk.js',
        path: path.resolve(__dirname, 'examples/build'),
        publicPath: publicPath
    },

    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        loader: require.resolve('eslint-loader'),
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                            quiet: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                    cacheCompression: true,
                    compact: true,
                },
            },
            {
                test: /\.css$/,
                // use: devMode ? cssuse : MiniCssExtractPlugin.loader,
                use: [
                    devMode && require.resolve('style-loader'),
                    !devMode && {
                        loader: MiniCssExtractPlugin.loader,
                    },
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
                                postcssFlexbugs,
                                postcssPresetEnv({
                                    autoprefixer: {
                                        flexbox: 'no-2009',
                                    },
                                    stage: 3,
                                }),
                                // autoprefixer({
                                //     browsers: [
                                //         '>1%',
                                //         'last 4 versions',
                                //         'Firefox ESR',
                                //         'not ie < 9', // React doesn't support IE8 anyway
                                //     ],
                                //     flexbox: 'no-2009',
                                // }),
                            ],
                            sourceMap: !devMode,
                        },
                    },
                ].filter(Boolean),
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
            'styles': path.resolve(__dirname, 'src/css'),
        }
    },

    devtool: devMode ? 'inline-source-map' : 'cheap-module-source-map', // cheap-module-source-map, eval-source-map, inline-source-map

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: port,
        hot: true,
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'examples'),
        historyApiFallback: true,
    },

    optimization: {
        minimize: !devMode,
        minimizer: [
            // This is only used in production mode
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Disabled because of an issue with Terser breaking valid code:
                        // https://github.com/facebook/create-react-app/issues/5250
                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true,
            }),
            // This is only used in production mode
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    parser: safePostCssParser,
                    map: {
                        // `inline: false` forces the sourcemap to be output into a
                        // separate file
                        inline: false,
                        // `annotation: true` appends the sourceMappingURL to the end of
                        // the css file, helping the browser find the sourcemap
                        annotation: true,
                    },
                },
            }),
        ],
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
        splitChunks: {
            chunks: 'all',
            name: false,
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 10,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    // name: (module) => {
                    //     // get the name. E.g. node_modules/packageName/not/this/part.js
                    //     // or node_modules/packageName
                    //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            
                    //     // npm package names are URL-safe, but some servers don't like @ symbols
                    //     return `npm.${packageName.replace('@', '')}`;
                    // },
                    chunks: 'all',
                    enforce: true
                },
            },
        },
        // Keep the runtime chunk separated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        // https://github.com/facebook/create-react-app/issues/5358
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },

    plugins: [
        devMode && new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'examples/src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // '[name].css'
            chunkFilename: '[id].[contenthash].css', // '[id].css'
        }),
    ].filter(Boolean),
};
