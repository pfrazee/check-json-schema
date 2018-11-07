# `check-json-schema`

Usage:

```
$ npm i -g check-json-schema

$ check-json-schema good.schema.json
✔ good.schema.json

$ check-json-schema bad.schema.json
✖ bad.schema.json
 - data.properties['href'].format should be string

$ check-json-schema *.schema.json
✔ good.schema.json
✖ bad.schema.json
 - data.properties['href'].format should be string
```

## License

MIT