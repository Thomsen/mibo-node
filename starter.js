#!/usr/bin/env node

// enable es6 imports in nodejs
require('babel-register')({
  presets: ['env']
})

module.exports = require('./index.js');
