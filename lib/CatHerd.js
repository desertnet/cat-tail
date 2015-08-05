import fs from "fs"
import {PassThrough} from "stream"

const filesToCat = Symbol("filesToCat")

export default class CatHerd extends PassThrough {
  constructor (files, opts={}) {
    super(opts)

    this[filesToCat] = files.slice()
    this._readNextFile()
  }

  _readNextFile () {
    const file = this[filesToCat].shift()
    const stream = fs.createReadStream(file)
    stream.pipe(this, { end: false })
    stream.on("end", () => {
      stream.unpipe(this)
      if (this[filesToCat].length) {
        this._readNextFile()
      }
      else {
        this.push(null)
      }
    })
  }
}
