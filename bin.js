#!/usr/bin/env node

const checker = require('./index.js')
const path = require('path')

var ps = []
for (let schemaFilePath of process.argv.slice(2)) {
  // skip non json
  if (!schemaFilePath.endsWith('.json')) {
    console.log('skipping', schemaFilePath)
    continue
  }

  // skip common json
  if (schemaFilePath.endsWith('package.json')) {
    console.log('skipping package.json')
    continue
  }
  if (schemaFilePath.endsWith('package-lock.json')) {
    console.log('skipping package-lock.json')
    continue
  }

  // validate
  ps.push(checker.validate(schemaFilePath).catch(console.error))
}
Promise.all(ps).then(success => {
  if (success) process.exit(0)
  else process.exit(1)
})
