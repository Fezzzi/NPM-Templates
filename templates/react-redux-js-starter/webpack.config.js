const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
require('dotenv').config()

module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  context: path.resolve(__dirname, './src'),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, '.'),
      'src': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './assets'),
    },
  },
  output: {
    filename: 'main.[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: module =>
            `npm.${module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1].replace('@', '')}`,
        },
      },
    },
  },
  entry: {
    js: ['babel-polyfill', 'src/index.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT ?? 8081,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './assets/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: '../assets/manifest.json' },
        { from: '../assets/favicon.ico' },
        { from: '../assets/icons/icon-128.png' },
        { from: '../assets/icons/icon-512.png' },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_PORT': (process.env.NODE_ENV !== 'production' && process.env.PROXY_PORT) ?? process.env.SERVER_PORT,
      'process.env.DEBUG': Boolean(process.env.DEBUG) || false,
    }),
  ],
}
