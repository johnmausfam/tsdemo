const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:"development",
    entry: {
        bundle: [
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/dev-server',
            path.resolve(__dirname, 'src/index.tsx')
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin()
    ],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js",".jsx",".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.(jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/, loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8310
                        }
                    }
                ]
            }
        ]
    }
};
