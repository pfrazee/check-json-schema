#!/usr/bin/env node

const checker = require('./index.js')
const path = require('path')

var ps = []
for (let schemaFilePath of process.argv.slice(2)) {
  ps.push(checker.validate(schemaFilePath).catch(console.error))
}
Promise.all(ps).then(success => {
  if (success) process.exit(0)
  else process.exit(1)
})
