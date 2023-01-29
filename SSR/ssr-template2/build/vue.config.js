const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const serverConfig = require('./server');
const clientConfig = require('./client');

if (TARGET_NODE) {
  module.exports = serverConfig;
} else {
  module.exports = clientConfig;