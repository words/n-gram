# n-gram [![Build Status](https://img.shields.io/travis/wooorm/n-gram.svg?style=flat)](https://travis-ci.org/wooorm/n-gram) [![Coverage Status](https://img.shields.io/coveralls/wooorm/n-gram.svg?style=flat)](https://coveralls.io/r/wooorm/n-gram?branch=master)

Get [n-grams](http://en.wikipedia.org/wiki/N-gram) in JavaScript.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install n-gram
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/n-gram
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install n-gram
```

[Duo](http://duojs.org/#getting-started):

```javascript
var nGram = require('wooorm/n-gram');
```

UMD (globals/AMD/CommonJS) ([uncompressed](n-gram.js) and [compressed](n-gram.min.js)):

```html
<script src="path/to/n-gram.js"></script>
<script>
  nGram.bigram('n-gram'); // ['n-', '-g', 'gr', 'ra', 'am']
</script>
```

## Usage

```javascript
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

On a MacBook Air, it runs about 583,367 op/s on a sentence.

```text
               nGram -- this module
  583,367 op/s »   bigrams on a sentence
    4,250 op/s »   bigrams on an article
  566,931 op/s »  trigrams on a sentence
    4,204 op/s »  trigrams on an article
  542,756 op/s » ten-grams on a sentence
    3,597 op/s » ten-grams on an article

               madbence/ngram
  538,421 op/s »   bigrams on a sentence
    9,842 op/s »   bigrams on an article
  525,198 op/s »  trigrams on a sentence
    9,253 op/s »  trigrams on an article
  539,926 op/s » ten-grams on a sentence
    6,403 op/s » ten-grams on an article
```

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
