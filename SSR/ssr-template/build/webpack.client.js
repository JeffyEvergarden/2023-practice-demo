const path = require('path')

const { merge } = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    client: resolve('../src/entry-client.js')
  }
}
