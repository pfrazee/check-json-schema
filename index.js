const Ajv = require('ajv')
const fs = require('fs').promises
const figures = require('figures')

const ajv = new Ajv({})

exports.validate = async function (schemaPath) {
  try {
    var schemaFile = await fs.readFile(schemaPath, 'utf8')
  } catch (e) {
    console.log(figures.cross, schemaPath)
    console.error('Failed to read schema file', schemaPath)
    console.error(e)
    return false
  }
  try {
    var schema = JSON.parse(schemaFile)
  } catch (e) {
    console.log(figures.cross, schemaPath)
    console.error('Failed to parse JSON in schema file', schemaPath)
    console.error(e)
    return false
  }
  if (ajv.validateSchema(schema)) {
    console.log(figures.tick, schemaPath)
    return true
  } else {
    console.log(figures.cross, schemaPath)
    console.error(' -', ajv.errorsText(ajv.errors, {separator: '\n - '}))
    return false
  }
}