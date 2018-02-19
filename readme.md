# keys-array

Returns an array of the keys/indexes of an Object, Map, Array, or Typed Array. Useful for when you need the keys of a collection object but aren’t sure what type of collection you’ll be given.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i keys-array
```

## API

The module exports a single function.

### Parameter

Bindable: `c` (Array, Iterator, Object, Map, Set, or Typed Array)

### Return Value

An array of keys from the collection.

## Examples

### Arrays

```javascript
const keys = require('keys-array')

keys(['a', 'b']) // [0, 1]

// Supports the bind operator
['a', 'b']::keys() // [0, 1]
```

### Iterators

`keys-array` will treat an iterator as if it were an array of values. Each “key” will be an incrementing integer index that starts at zero.

```javascript
const keys = require('keys-array')

function * gen () {
  yield 'a'
  yield 'b'
}

keys(gen()) // [0, 1]
```

### Maps

```javascript
const keys = require('keys-array')

const map = new Map()
map.set('key', 'value')

keys(map) // ['key']
```

### Objects

```javascript
const keys = require('keys-iterator')

keys({key: 'value'}) // ['key']

// Supports the bind operator
const obj = {key: 'value'}
obj::keys() // ['key']
```

### Sets

`keys-array` will treat a Set like an array, and will yield integer index keys starting at zero. Note that this behavior is different from that of the built-in [`Set.prototype.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys) method.

```javascript
const keys = require('keys-array')

const set = new Set()
set.add('first')
set.add('second')

keys(set) // [0, 1]
```

### Typed Arrays

```javascript
const keys = require('keys-array')

const typedArray = new Int32Array(new ArrayBuffer(4))

keys(typedArray) // [0]
```

## Related

* [entries-iterator](https://github.com/lamansky/entries-iterator)
* [entries-array](https://github.com/lamansky/entries-array)
* [keys-iterator](https://github.com/lamansky/keys-iterator)
* [values-iterator](https://github.com/lamansky/values-iterator)
* [values-array](https://github.com/lamansky/values-array)
