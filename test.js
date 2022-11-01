import assert from 'node:assert/strict'
import test from 'node:test'
import {nGram} from './index.js'

test('nGram (main)', function () {
  assert.throws(
    function () {
      nGram(0)
    },
    /^Error: `0` is not a valid argument for `n-gram`$/,
    'should fail when given `0`'
  )

  assert.throws(
    function () {
      nGram(-1)
    },
    /^Error: `-1` is not a valid argument for `n-gram`$/,
    'should fail when given `-1`'
  )

  assert.throws(
    function () {
      nGram(Number.NEGATIVE_INFINITY)
    },
    /^Error: `-Infinity` is not a valid argument for `n-gram`$/,
    'should fail when given `Number.NEGATIVE_INFINITY`'
  )

  assert.throws(
    function () {
      // @ts-ignore
      nGram(true)
    },
    /^Error: `true` is not a valid argument for `n-gram`$/,
    'should fail when given `true`'
  )

  assert.throws(
    function () {
      // @ts-ignore
      nGram('5')
    },
    /^Error: `5` is not a valid argument for `n-gram`$/,
    "should fail when given `'5'`"
  )

  assert.throws(
    function () {
      nGram(Number.NaN)
    },
    /^Error: `NaN` is not a valid argument for `n-gram`$/,
    'should fail when given `Number.NaN`'
  )

  assert.throws(
    function () {
      nGram(Number.POSITIVE_INFINITY)
    },
    /^Error: `Infinity` is not a valid argument for `n-gram`$/,
    'should fail when given `Number.POSITIVE_INFINITY`'
  )
})

test('nGram(1) # unigram', function () {
  const unigrams = nGram(1)
  // @ts-ignore
  assert.deepEqual(unigrams(0), ['0'], 'should return strings (#1)')
  // @ts-ignore
  assert.deepEqual(unigrams(-1), ['-', '1'], 'should return strings (#2)')
  assert.deepEqual(
    // @ts-ignore
    unigrams(true),
    ['t', 'r', 'u', 'e'],
    'should return strings (#3)'
  )
  assert.deepEqual(unigrams('5'), ['5'], 'should return strings (#4)')
  assert.deepEqual(
    // @ts-ignore
    unigrams(Number.NaN),
    ['N', 'a', 'N'],
    'should return strings (#5)'
  )
  assert.deepEqual(
    // @ts-ignore
    unigrams(Number.POSITIVE_INFINITY),
    ['I', 'n', 'f', 'i', 'n', 'i', 't', 'y'],
    'should return strings (#6)'
  )

  assert.equal(typeof unigrams, 'function', 'should be a function')

  assert.ok(Array.isArray(unigrams()), 'should return an Array')

  assert.deepEqual(
    unigrams('test'),
    ['t', 'e', 's', 't'],
    'should return strings'
  )

  assert.deepEqual(
    unigrams(),
    [],
    'should return no n-grams when no value is given'
  )

  assert.deepEqual(
    unigrams('a'),
    ['a'],
    'should return one n-gram when one character is given'
  )

  assert.deepEqual(
    unigrams('ab'),
    ['a', 'b'],
    'should return two n-grams when two characters are given'
  )

  assert.deepEqual(
    unigrams(['alpha', 'bravo', 'charlie']),
    [['alpha'], ['bravo'], ['charlie']],
    'should support an array'
  )

  assert.deepEqual(
    unigrams([]),
    [],
    'should return no n-grams when an empty array is given'
  )

  assert.deepEqual(
    unigrams(['alpha']),
    [['alpha']],
    'should return one n-gram when an array with one value is given'
  )

  assert.deepEqual(
    unigrams(['alpha', 'bravo']),
    [['alpha'], ['bravo']],
    'should return two n-grams when an array with two values is given'
  )
})

test('nGram(2) # bigram', function () {
  const bigrams = nGram(2)

  assert.equal(typeof bigrams, 'function', 'should be a function')

  assert.ok(Array.isArray(bigrams()), 'should return an Array')

  assert.deepEqual(bigrams('test'), ['te', 'es', 'st'], 'should return strings')

  assert.deepEqual(
    bigrams(),
    [],
    'should return no n-grams when no value is given'
  )

  assert.deepEqual(
    bigrams('a'),
    [],
    'should return no n-grams when one character is given'
  )

  assert.deepEqual(
    bigrams('ab'),
    ['ab'],
    'should return one n-gram when two characters are given'
  )

  assert.deepEqual(
    bigrams(['alpha', 'bravo', 'charlie']),
    [
      ['alpha', 'bravo'],
      ['bravo', 'charlie']
    ],
    'should support an array'
  )

  assert.deepEqual(
    bigrams([]),
    [],
    'should return no n-grams when an empty array is given'
  )

  assert.deepEqual(
    bigrams(['alpha']),
    [],
    'should return no n-grams when an array with one value is given'
  )

  assert.deepEqual(
    bigrams(['alpha', 'bravo']),
    [['alpha', 'bravo']],
    'should return one n-gram when an array with two values is given'
  )
})

test('nGram(3) # trigram', function () {
  const trigrams = nGram(3)

  assert.equal(typeof trigrams, 'function', 'should be a function')

  assert.ok(Array.isArray(trigrams()), 'should return an Array')

  assert.deepEqual(trigrams('test'), ['tes', 'est'], 'should return strings')

  assert.deepEqual(
    trigrams(),
    [],
    'should return no n-grams when no value is given'
  )

  assert.deepEqual(
    trigrams('a'),
    [],
    'should return no n-grams when one character is given'
  )

  assert.deepEqual(
    trigrams('ab'),
    [],
    'should return no n-grams when two characters are given'
  )

  assert.deepEqual(
    trigrams('abc'),
    ['abc'],
    'should return one n-gram when three characters are given'
  )

  assert.deepEqual(
    trigrams(['alpha', 'bravo', 'charlie', 'delta']),
    [
      ['alpha', 'bravo', 'charlie'],
      ['bravo', 'charlie', 'delta']
    ],
    'should support an array'
  )

  assert.deepEqual(
    trigrams([]),
    [],
    'should return no n-grams when an empty array is given'
  )

  assert.deepEqual(
    trigrams(['alpha']),
    [],
    'should return no n-grams when an array with one value is given'
  )

  assert.deepEqual(
    trigrams(['alpha', 'bravo']),
    [],
    'should return no n-grams when an array with two values is given'
  )

  assert.deepEqual(
    trigrams(['alpha', 'bravo', 'charlie']),
    [['alpha', 'bravo', 'charlie']],
    'should return one n-gram when an array with three values is given'
  )
})

test('nGram(10) # decagram', function () {
  const decagrams = nGram(10)
  const values = [
    'alpha',
    'bravo',
    'charlie',
    'delta',
    'echo',
    'foxtrot',
    'golf',
    'hotel',
    'india',
    'juliett',
    'kilo'
  ]

  assert.equal(typeof decagrams, 'function', 'should be a function')

  assert.ok(Array.isArray(decagrams()), 'should return an Array')

  assert.deepEqual(
    decagrams('testtesttest'),
    ['testtestte', 'esttesttes', 'sttesttest'],
    'should return strings'
  )

  assert.deepEqual(
    decagrams(),
    [],
    'should return no n-grams when no value is given'
  )

  assert.deepEqual(
    decagrams('testtestt'),
    [],
    'should return no n-grams when nine characters are given'
  )

  assert.deepEqual(
    decagrams('testtestte'),
    ['testtestte'],
    'should return one n-gram when ten characters are given'
  )

  assert.deepEqual(
    decagrams(values),
    [values.slice(0, 10), values.slice(1, 11)],
    'should return arrays of strings'
  )

  assert.deepEqual(
    decagrams([]),
    [],
    'should return no n-grams when an empty array is given'
  )

  assert.deepEqual(
    decagrams(['alpha']),
    [],
    'should return no n-grams when an array with one value is given'
  )

  assert.deepEqual(
    decagrams(values.slice(0, 9)),
    [],
    'should return no n-grams when an array with nine values is given'
  )

  assert.deepEqual(
    decagrams(values.slice(0, 10)),
    [values.slice(0, 10)],
    'should return one n-gram when an array with ten values is given'
  )
})
