'use strict'

const keys = require('keys-iterator')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator((...args) => Array.from(keys(...args)))
