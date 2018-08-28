# n-gram [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Get [n-grams][wiki] in JavaScript.

## Installation

[npm][]:

```bash
npm install n-gram
```

## Usage

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

Want padding?  Use something like the following: `nGram(2)(' ' + value + ' ');`

### `nGram.bigram(value)`

Shortcut for `nGram(2)`.

### `nGram.trigram(value)`

Shortcut for `nGram(3)`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/n-gram.svg

[travis]: https://travis-ci.org/words/n-gram

[codecov-badge]: https://img.shields.io/codecov/c/github/words/n-gram.svg

[codecov]: https://codecov.io/github/words/n-gram

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://wooorm.com

[wiki]: http://en.wikipedia.org/wiki/N-gram
