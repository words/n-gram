# n-gram [![Build Status](https://travis-ci.org/wooorm/n-gram.svg?branch=master)](https://travis-ci.org/wooorm/n-gram) [![Coverage Status](https://img.shields.io/coveralls/wooorm/n-gram.svg)](https://coveralls.io/r/wooorm/n-gram?branch=master)

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
  506,112 op/s »   bigrams on a sentence
    1,510 op/s »   bigrams on an article
  510,072 op/s »  trigrams on a sentence
    2,334 op/s »  trigrams on an article
  488,316 op/s » ten-grams on a sentence
    2,449 op/s » ten-grams on an article

               madbence/ngram
  489,850 op/s »   bigrams on a sentence
    2,923 op/s »   bigrams on an article
  467,247 op/s »  trigrams on a sentence
    4,019 op/s »  trigrams on an article
  478,506 op/s » ten-grams on a sentence
    3,889 op/s » ten-grams on an article

               ngram
  126,431 op/s »   bigrams on a sentence
    2,614 op/s »   bigrams on an article
  172,970 op/s »  trigrams on a sentence
    2,912 op/s »  trigrams on an article
  200,743 op/s » ten-grams on a sentence
    2,927 op/s » ten-grams on an article
```

## License

MIT © Titus Wormer
