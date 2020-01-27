# n-gram

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Get [n-grams][wiki].

## Install

[npm][]:

```sh
npm install n-gram
```

## Use

```js
var nGram = require('n-gram')

nGram.bigram('n-gram') // ['n-', '-g', 'gr', 'ra', 'am']
nGram(2)('n-gram') // ['n-', '-g', 'gr', 'ra', 'am']

nGram.trigram('n-gram') // ['n-g', '-gr', 'gra', 'ram']

nGram(6)('n-gram') // ['n-gram']
nGram(7)('n-gram') // []

// Anything with a `.length` and `.slice` works: arrays too.
nGram.bigram(['alpha', 'bravo', 'charlie']) // [['alpha', 'bravo'], ['bravo', 'charlie']]
```

## API

### `nGram(n)`

Factory returning a function that converts a given value to n-grams.

Want padding?
Use something like the following: `nGram(2)(' ' + value + ' ');`

### `nGram.bigram(value)`

Shortcut for `nGram(2)`.

### `nGram.trigram(value)`

Shortcut for `nGram(3)`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/n-gram.svg

[build]: https://travis-ci.org/words/n-gram

[coverage-badge]: https://img.shields.io/codecov/c/github/words/n-gram.svg

[coverage]: https://codecov.io/github/words/n-gram

[downloads-badge]: https://img.shields.io/npm/dm/n-gram.svg

[downloads]: https://www.npmjs.com/package/n-gram

[size-badge]: https://img.shields.io/bundlephobia/minzip/n-gram.svg

[size]: https://bundlephobia.com/result?p=n-gram

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/N-gram
