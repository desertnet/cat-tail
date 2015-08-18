# cat-tail

Get a readable stream spanning an array of files from a given position

## Installation

```
npm install cat-tail
```

## API

```javascript
var CatTail = require("cat-tail")
```

### Constructor `new CatTail(files, [options])`

Instantiates a new `CatTail` object, which is a `Readable` stream object. It will immediately open the files in the given `files` array, reading them in order and pushing them into the stream. The `options` argument takes the standard properties for readable streams, plus the following:

  - `start`: Starting byte offset to begin reading from in the first file.
  - `end`: Byte position in the last file where reading should stop.

## Contributing

Patches are welcome! This module uses ES2015. To compile the source, use `npm run compile`. All changes need test coverage. To run the tests, use `npm test`.
