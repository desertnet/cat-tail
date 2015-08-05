import assert from "assert"
import {resolve} from "path"
import concat from "concat-stream"

import CatHerd from "../lib/CatHerd.js"

const fixtures = ["a","b","c"].map(file =>
  resolve(__dirname, "..", "fixtures", `${file}.txt`)
)

describe("CatHerd", () => {
  let herd

  describe("stream", () => {
    it("should produce concatenated file contents", done => {
      herd = new CatHerd(fixtures)
      herd.pipe(concat(result => {
        assert.strictEqual(result.toString(), "aaa\nbbb\nccc\n")
        return done()
      }))
    })
  })
})
