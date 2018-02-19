'use strict'

const assert = require('assert')
const keys = require('.')

describe('keysArray()', function () {
  it('should return a keys array', function () {
    const arr = keys(['a', 'b'])
    assert(Array.isArray(arr))
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], 0)
    assert.strictEqual(arr[1], 1)
  })

  it('should support the bind operator', function () {
    const arr = keys.call(['a', 'b'])
    assert(Array.isArray(arr))
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], 0)
    assert.strictEqual(arr[1], 1)
  })
})
