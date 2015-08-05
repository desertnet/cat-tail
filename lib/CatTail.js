import fs from "fs"
import {PassThrough} from "stream"

const streamsToCat = Symbol("streamsToCat")
const error = Symbol("error")

export default class CatTail extends PassThrough {
  constructor (files, opts={}) {
    super(opts)

    opts.start = opts.start || 0

    this[streamsToCat] = files.map((file, i) =>
      fs.createReadStream(file, { start: i === 0 ? opts.start : 0 })
        .once("error", err => this._errorGracefully(err)))

    this._readNextFile()
  }

  _readNextFile () {
    const stream = this[streamsToCat].shift()
    stream.pipe(this, { end: false })
    stream.once("end", () => {
      stream.unpipe(this)
      if (this[streamsToCat].length) {
        this._readNextFile()
      }
      else {
        this.push(null)
      }
    })
  }

  _errorGracefully (err) {
    if (this[error]) {
      return
    }
    this[error] = err

    this[streamsToCat].forEach(stream => stream.destroy())
    this[streamsToCat] = null

    this.emit("error", err)
  }
}
