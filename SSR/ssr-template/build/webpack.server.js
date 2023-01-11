const path = require('path')

const { merge } = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    server: resolve('../src/entry-server.js')
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  plugin: [
    new HtmlWebpackPlugin({
      filename: 'index.ssr.html',
      template: resolveObjectURL('../public/index.html'),
      excludeChunks: ['server'],
      minify: {
        removeComments: false
      }
    })
  ]
}
