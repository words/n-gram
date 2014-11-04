# n-gram [![Build Status](https://img.shields.io/travis/wooorm/n-gram.svg?style=flat)](https://travis-ci.org/wooorm/n-gram) [![Coverage Status](https://img.shields.io/coveralls/wooorm/n-gram.svg?style=flat)](https://coveralls.io/r/wooorm/n-gram?branch=master)

Get [n-grams](http://en.wikipedia.org/wiki/N-gram) in JavaScript.

## Installation

npm:
```sh
$ npm install n-gram
```

Component:
```sh
$ component install wooorm/n-gram
```

Bower:
```sh
$ bower install n-gram
```

## Usage

```js
var nGram = require('n-gram');

nGram.bigram('n-gram'); // ['n-', '-g', 'gr', 'ra', 'am']
nGram(2)('n-gram'); // ['n-', '-g', 'gr', 'ra', 'am']

nGram.trigram('n-gram'); // ['n-g', '-gr', 'gra', 'ram']

nGram(6)('n-gram'); // ['n-gram']
nGram(7)('n-gram'); // []
```

## API

### nGram(n)

Factory returning a function that converts a given string to n-grams.

Want padding? Use something like the following: `nGram(2)(' ' + value + ' ');`

### nGram.bigram(value)

Shortcut for `nGram(2)`

### nGram.trigram(value)

Shortcut for `nGram(3)`

## Benchmark

```sh
$ npm run install-benchmark # Just once of course.
$ npm run benchmark
```

On a MacBook Air, it runs about 506,112 op/s on a ssentence.

```
               nGram -- this module
  584,668 op/s »   bigrams on a sentence
    4,607 op/s »   bigrams on an article
  566,130 op/s »  trigrams on a sentence
    4,558 op/s »  trigrams on an article
  498,405 op/s » ten-grams on a sentence
    4,085 op/s » ten-grams on an article

               madbence/ngram
  489,280 op/s »   bigrams on a sentence
    8,747 op/s »   bigrams on an article
  487,999 op/s »  trigrams on a sentence
    8,901 op/s »  trigrams on an article
  533,071 op/s » ten-grams on a sentence
    7,788 op/s » ten-grams on an article

               ngram
  359,137 op/s »   bigrams on a sentence
    5,634 op/s »   bigrams on an article
  365,814 op/s »  trigrams on a sentence
    5,186 op/s »  trigrams on an article
  367,451 op/s » ten-grams on a sentence
    4,781 op/s » ten-grams on an article

```

## License

MIT © Titus Wormer
