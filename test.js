'use strict'

var test = require('tape')
var nGram = require('.')

var own = {}.hasOwnProperty

test('nGram', function (t) {
  var fixtures = {
    '`0`': 0,
    'negative numbers': -1,
    'negative numbers (2)': Number.NEGATIVE_INFINITY,
    'non-numbers': true,
    'non-numbers (2)': '5',
    'non-numbers (3)': Number.NaN,
    '`Infinity`': Number.POSITIVE_INFINITY
  }
  var name

  for (name in fixtures) {
    if (own.call(fixtures, name)) {
      t.throws(
        function () {
          nGram(fixtures[name])
        },
        new RegExp(
          '^Error: `' + fixtures[name] + '` is not a valid argument for n-gram$'
        ),
        'should fail when given ' + name
      )
    }
  }

  t.test('nGram(1) # unigram', function (st) {
    var unigrams = nGram(1)

    var values = {
      '`0`': [0, '0'],
      'negative numbers': [-1, '-', '1'],
      'non-numbers': [true, 't', 'r', 'u', 'e'],
      'non-numbers (2)': ['5', '5'],
      'non-numbers (3)': [Number.NaN, 'N', 'a', 'N'],
      '`Infinity`': [
        Number.POSITIVE_INFINITY,
        'I',
        'n',
        'f',
        'i',
        'n',
        'i',
        't',
        'y'
      ]
    }
    var name

    for (name in values) {
      if (own.call(values, name)) {
        st.deepEqual(
          unigrams(values[name][0]),
          values[name].slice(1),
          'should return strings'
        )
      }
    }

    st.equal(typeof unigrams, 'function', 'should be a function')

    st.ok(Array.isArray(unigrams()), 'should return an Array')

    st.deepEqual(
      unigrams('test'),
      ['t', 'e', 's', 't'],
      'should return strings'
    )

    st.deepEqual(
      unigrams(),
      [],
      'should return no n-grams when no value is given'
    )

    st.deepEqual(
      unigrams('a'),
      ['a'],
      'should return one n-gram when one character is given'
    )

    st.deepEqual(
      unigrams('ab'),
      ['a', 'b'],
      'should return two n-grams when two characters are given'
    )

    st.deepEqual(
      unigrams(['alpha', 'bravo', 'charlie']),
      [['alpha'], ['bravo'], ['charlie']],
      'should support an array'
    )

    st.deepEqual(
      unigrams([]),
      [],
      'should return no n-grams when an empty array is given'
    )

    st.deepEqual(
      unigrams(['alpha']),
      [['alpha']],
      'should return one n-gram when an array with one value is given'
    )

    st.deepEqual(
      unigrams(['alpha', 'bravo']),
      [['alpha'], ['bravo']],
      'should return two n-grams when an array with two values is given'
    )

    st.end()
  })

  t.test('nGram(2) # bigram', function (st) {
    var bigrams = nGram(2)

    st.equal(typeof bigrams, 'function', 'should be a function')

    st.ok(Array.isArray(bigrams()), 'should return an Array')

    st.deepEqual(bigrams('test'), ['te', 'es', 'st'], 'should return strings')

    st.deepEqual(
      bigrams(),
      [],
      'should return no n-grams when no value is given'
    )

    st.deepEqual(
      bigrams('a'),
      [],
      'should return no n-grams when one character is given'
    )

    st.deepEqual(
      bigrams('ab'),
      ['ab'],
      'should return one n-gram when two characters are given'
    )

    st.deepEqual(
      bigrams(['alpha', 'bravo', 'charlie']),
      [
        ['alpha', 'bravo'],
        ['bravo', 'charlie']
      ],
      'should support an array'
    )

    st.deepEqual(
      bigrams([]),
      [],
      'should return no n-grams when an empty array is given'
    )

    st.deepEqual(
      bigrams(['alpha']),
      [],
      'should return no n-grams when an array with one value is given'
    )

    st.deepEqual(
      bigrams(['alpha', 'bravo']),
      [['alpha', 'bravo']],
      'should return one n-gram when an array with two values is given'
    )

    st.end()
  })

  t.test('nGram(3) # trigram', function (st) {
    var trigrams = nGram(3)

    st.equal(typeof trigrams, 'function', 'should be a function')

    st.ok(Array.isArray(trigrams()), 'should return an Array')

    st.deepEqual(trigrams('test'), ['tes', 'est'], 'should return strings')

    st.deepEqual(
      trigrams(),
      [],
      'should return no n-grams when no value is given'
    )

    st.deepEqual(
      trigrams('a'),
      [],
      'should return no n-grams when one character is given'
    )

    st.deepEqual(
      trigrams('ab'),
      [],
      'should return no n-grams when two characters are given'
    )

    st.deepEqual(
      trigrams('abc'),
      ['abc'],
      'should return one n-gram when three characters are given'
    )

    st.deepEqual(
      trigrams(['alpha', 'bravo', 'charlie', 'delta']),
      [
        ['alpha', 'bravo', 'charlie'],
        ['bravo', 'charlie', 'delta']
      ],
      'should support an array'
    )

    st.deepEqual(
      trigrams([]),
      [],
      'should return no n-grams when an empty array is given'
    )

    st.deepEqual(
      trigrams(['alpha']),
      [],
      'should return no n-grams when an array with one value is given'
    )

    st.deepEqual(
      trigrams(['alpha', 'bravo']),
      [],
      'should return no n-grams when an array with two values is given'
    )

    st.deepEqual(
      trigrams(['alpha', 'bravo', 'charlie']),
      [['alpha', 'bravo', 'charlie']],
      'should return one n-gram when an array with three values is given'
    )

    st.end()
  })

  t.test('nGram(10) # decagram', function (st) {
    var decagrams = nGram(10)
    var values = [
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

    st.equal(typeof decagrams, 'function', 'should be a function')

    st.ok(Array.isArray(decagrams()), 'should return an Array')

    st.deepEqual(
      decagrams('testtesttest'),
      ['testtestte', 'esttesttes', 'sttesttest'],
      'should return strings'
    )

    st.deepEqual(
      decagrams(),
      [],
      'should return no n-grams when no value is given'
    )

    st.deepEqual(
      decagrams('testtestt'),
      [],
      'should return no n-grams when nine characters are given'
    )

    st.deepEqual(
      decagrams('testtestte'),
      ['testtestte'],
      'should return one n-gram when ten characters are given'
    )

    st.deepEqual(
      decagrams(values),
      [values.slice(0, 10), values.slice(1, 11)],
      'should return arrays of strings'
    )

    st.deepEqual(
      decagrams([]),
      [],
      'should return no n-grams when an empty array is given'
    )

    st.deepEqual(
      decagrams(['alpha']),
      [],
      'should return no n-grams when an array with one value is given'
    )

    st.deepEqual(
      decagrams(values.slice(0, 9)),
      [],
      'should return no n-grams when an array with nine values is given'
    )

    st.deepEqual(
      decagrams(values.slice(0, 10)),
      [values.slice(0, 10)],
      'should return one n-gram when an array with ten values is given'
    )

    st.end()
  })

  t.end()
})
