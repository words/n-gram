import test from 'tape'
import {nGram} from './index.js'

test('nGram', function (t) {
  t.throws(
    function () {
      nGram(0)
    },
    /^Error: `0` is not a valid argument for `n-gram`$/,
    'should fail when given `0`'
  )

  t.throws(
    function () {
      nGram(-1)
    },
    /^Error: `-1` is not a valid argument for `n-gram`$/,
    'should fail when given `-1`'
  )

  t.throws(
    function () {
      nGram(Number.NEGATIVE_INFINITY)
    },
    /^Error: `-Infinity` is not a valid argument for `n-gram`$/,
    'should fail when given `Number.NEGATIVE_INFINITY`'
  )

  t.throws(
    function () {
      // @ts-ignore
      nGram(true)
    },
    /^Error: `true` is not a valid argument for `n-gram`$/,
    'should fail when given `true`'
  )

  t.throws(
    function () {
      // @ts-ignore
      nGram('5')
    },
    /^Error: `5` is not a valid argument for `n-gram`$/,
    "should fail when given `'5'`"
  )

  t.throws(
    function () {
      nGram(Number.NaN)
    },
    /^Error: `NaN` is not a valid argument for `n-gram`$/,
    'should fail when given `Number.NaN`'
  )

  t.throws(
    function () {
      nGram(Number.POSITIVE_INFINITY)
    },
    /^Error: `Infinity` is not a valid argument for `n-gram`$/,
    'should fail when given `Number.POSITIVE_INFINITY`'
  )

  t.test('nGram(1) # unigram', function (st) {
    const unigrams = nGram(1)
    // @ts-ignore
    st.deepEqual(unigrams(0), ['0'], 'should return strings (#1)')
    // @ts-ignore
    st.deepEqual(unigrams(-1), ['-', '1'], 'should return strings (#2)')
    st.deepEqual(
      // @ts-ignore
      unigrams(true),
      ['t', 'r', 'u', 'e'],
      'should return strings (#3)'
    )
    st.deepEqual(unigrams('5'), ['5'], 'should return strings (#4)')
    st.deepEqual(
      // @ts-ignore
      unigrams(Number.NaN),
      ['N', 'a', 'N'],
      'should return strings (#5)'
    )
    st.deepEqual(
      // @ts-ignore
      unigrams(Number.POSITIVE_INFINITY),
      ['I', 'n', 'f', 'i', 'n', 'i', 't', 'y'],
      'should return strings (#6)'
    )

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
    const bigrams = nGram(2)

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
    const trigrams = nGram(3)

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
