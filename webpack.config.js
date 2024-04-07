const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const THREE = require('three');

module.exports = {
  mode: 'development',
  entry: {
      app: './src/index.js',
      },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './docs',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sun Solar System',
    }),
    new webpack.ProvidePlugin({
      'THREE': 'three'
    }),
  ],
  resolve: {
    alias: {
      'three/OrbitControls': path.join(__dirname, 'node_modules/three/examples/jsm/controls/OrbitControls.js'),
      'three/Lensflare': path.join(__dirname, 'node_modules/three/examples/jsm/objects/Lensflare.js'),
      'three/LensflareElement': path.join(__dirname, 'node_modules/three/examples/jsm/objects/Lensflare.js')
    }
  },
  module:{
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imgs/'
            },
          }],
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};