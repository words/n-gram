# n-gram

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Get [n-grams][wiki].

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install n-gram
```

## Use

```js
import {bigram, trigram, nGram} from 'n-gram'

bigram('n-gram') // ['n-', '-g', 'gr', 'ra', 'am']
nGram(2)('n-gram') // ['n-', '-g', 'gr', 'ra', 'am']

trigram('n-gram') // ['n-g', '-gr', 'gra', 'ram']

nGram(6)('n-gram') // ['n-gram']
nGram(7)('n-gram') // []

// Anything with a `.length` and `.slice` works: arrays too.
bigram(['alpha', 'bravo', 'charlie']) // [['alpha', 'bravo'], ['bravo', 'charlie']]
```

## API

This package exports the following identifiers: `ngram`, `bigram`, and `trigram`.
There is no default export.

### `nGram(n)`

Create a function that converts a given value to n-grams.

Want padding?
Use something like the following: `nGram(2)(' ' + value + ' ')`

### `bigram(value)`

Shortcut for `nGram(2)`.

### `trigram(value)`

Shortcut for `nGram(3)`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/n-gram/workflows/main/badge.svg

[build]: https://github.com/words/n-gram/actions

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
