import fs from "fs"
import {PassThrough} from "stream"

const streamsToCat = Symbol("streamsToCat")

export default class CatTail extends PassThrough {
  constructor (files, opts={}) {
    super(opts)

    this[streamsToCat] = files.map(file => fs.createReadStream(file))
    this._readNextFile()
  }

  _readNextFile () {
    const stream = this[streamsToCat].shift()
    stream.pipe(this, { end: false })
    stream.on("end", () => {
      stream.unpipe(this)
      if (this[streamsToCat].length) {
        this._readNextFile()
      }
      else {
        this.push(null)
      }
    })
  }
}
