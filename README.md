# JSON Schema Checker

Usage:

```
$ npm i -g json-schema-checker
$ json-schema-checker good.schema.json
✔ good.schema.json
$ json-schema-checker bad.schema.json
✖ bad.schema.json
 - data.properties['href'].format should be string
$ json-schema-checker *.schema.json
✔ good.schema.json
✖ bad.schema.json
 - data.properties['href'].format should be string
```

## License

MIT