import assert from "assert"
import {resolve} from "path"
import concat from "concat-stream"

import CatTail from "../lib/CatTail.js"

const fixtures = ["a","b","c"].map(file =>
  resolve(__dirname, "..", "fixtures", `${file}.txt`)
)

describe("CatTail", () => {
  let cat

  describe("stream", () => {
    it("should produce concatenated file contents", done => {
      cat = new CatTail(fixtures)
      cat.pipe(concat(result => {
        assert.strictEqual(result.toString(), "aaa\nbbb\nccc\n")
        return done()
      }))
    })
  })
})
