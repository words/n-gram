'use strict';

var test = require('tape');
var nGram = require('./');

test('nGram', function (t) {
  var fixtures = {
    '`0`': 0,
    'negative numbers': -1,
    'negative numbers (2)': -Infinity,
    'non-numbers': true,
    'non-numbers (2)': '5',
    'non-numbers (3)': NaN,
    '`Infinity`': Infinity
  };

  Object.keys(fixtures).forEach(function (name) {
    var value = fixtures[name];
    t.throws(
      function () {
        nGram(value);
      },
      new RegExp('^Error: `' + value + '` is not a valid argument for n-gram$'),
      'should fail when given ' + name
    );
  });

  t.test('n-gram(1)', function (st) {
    var unigrams = nGram(1);

    st.equal(typeof unigrams, 'function', 'should be a function');

    st.ok(Array.isArray(unigrams()), 'should return an Array');

    st.deepEqual(
      unigrams('test'),
      ['t', 'e', 's', 't'],
      'should return strings'
    );

    st.deepEqual(
      unigrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      unigrams('a'),
      ['a'],
      'should return one n-gram when one character is given'
    );

    st.deepEqual(
      unigrams('ab'),
      ['a', 'b'],
      'should return two n-grams when two characters are given'
    );

    st.end();
  });

  t.test('n-gram(2)', function (st) {
    var bigrams = nGram(2);

    st.equal(typeof bigrams, 'function', 'should be a function');

    st.ok(Array.isArray(bigrams()), 'should return an Array');

    st.deepEqual(
      bigrams('test'),
      ['te', 'es', 'st'],
      'should return strings'
    );

    st.deepEqual(
      bigrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      bigrams('a'),
      [],
      'should return no n-grams when one character is given'
    );

    st.deepEqual(
      bigrams('ab'),
      ['ab'],
      'should return one n-gram when two characters are given'
    );

    st.end();
  });

  t.test('n-gram(3)', function (st) {
    var trigrams = nGram(3);

    st.equal(typeof trigrams, 'function', 'should be a function');

    st.ok(Array.isArray(trigrams()), 'should return an Array');

    st.deepEqual(
      trigrams('test'),
      ['tes', 'est'],
      'should return strings'
    );

    st.deepEqual(
      trigrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      trigrams('a'),
      [],
      'should return no n-grams when one character is given'
    );

    st.deepEqual(
      trigrams('ab'),
      [],
      'should return no n-grams when two characters are given'
    );

    st.deepEqual(
      trigrams('abc'),
      ['abc'],
      'should return one n-grams when three characters are given'
    );

    st.end();
  });

  t.test('n-gram(10)', function (st) {
    var decagrams = nGram(10);

    st.equal(typeof decagrams, 'function', 'should be a function');

    st.ok(Array.isArray(decagrams()), 'should return an Array');

    st.deepEqual(
      decagrams('testtesttest'),
      ['testtestte', 'esttesttes', 'sttesttest'],
      'should return strings'
    );

    st.deepEqual(
      decagrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      decagrams('testtestt'),
      [],
      'should return no n-grams when nine characters are given'
    );

    st.deepEqual(
      decagrams('testtestte'),
      ['testtestte'],
      'should return one n-gram when ten characters are given'
    );

    st.end();
  });

  t.test('n-gram(1) when given array', function (st) {
    var unigrams = nGram(1);

    st.equal(typeof unigrams, 'function', 'should be a function');

    st.ok(Array.isArray(unigrams()), 'should return an Array');

    st.deepEqual(
      unigrams(['this', 'is', 'a', 'test']),
      [
        ['this'],
        ['is'],
        ['a'],
        ['test']
      ],
      'should return arrays of strings'
    );

    st.deepEqual(
      unigrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      unigrams(['a']),
      [
        ['a']
      ],
      'should return one n-gram when one character is given'
    );

    st.deepEqual(
      unigrams(['a', 'b']),
      [
        ['a'],
        ['b']
      ],
      'should return two n-grams when two characters are given'
    );

    st.end();
  });

  t.test('n-gram(2) when given array', function (st) {
    var bigrams = nGram(2);

    st.equal(typeof bigrams, 'function', 'should be a function');

    st.ok(Array.isArray(bigrams()), 'should return an Array');

    st.deepEqual(
      bigrams(['this', 'is', 'a', 'test']),
      [
        ['this', 'is'],
        ['is', 'a'],
        ['a', 'test']
      ],
      'should return arrays of strings'
    );

    st.deepEqual(
      bigrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      bigrams(['a']),
      [],
      'should return no n-grams when one character is given'
    );

    st.deepEqual(
      bigrams(['a', 'b']),
      [
        ['a', 'b']
      ],
      'should return one n-gram when two characters are given'
    );

    st.end();
  });

  t.test('n-gram(3) when given array', function (st) {
    var trigrams = nGram(3);

    st.equal(typeof trigrams, 'function', 'should be a function');

    st.ok(Array.isArray(trigrams()), 'should return an Array');

    st.deepEqual(
      trigrams(['this', 'is', 'a', 'test']),
      [
        ['this', 'is', 'a'],
        ['is', 'a', 'test']
      ],
      'should return arrays of strings'
    );

    st.deepEqual(
      trigrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      trigrams(['a']),
      [],
      'should return no n-grams when one character is given'
    );

    st.deepEqual(
      trigrams(['a', 'b']),
      [],
      'should return no n-grams when two characters are given'
    );

    st.deepEqual(
      trigrams(['a', 'b', 'c']),
      [
        ['a', 'b', 'c']
      ],
      'should return one n-grams when three characters are given'
    );

    st.end();
  });

  t.test('n-gram(10) when given array', function (st) {
    var decagrams = nGram(10);

    st.equal(typeof decagrams, 'function', 'should be a function');

    st.ok(Array.isArray(decagrams()), 'should return an Array');

    st.deepEqual(
      decagrams(['this', 'is', 'a', 'test', 'that', 'contains', 'multiple', 'words', 'in', 'a', 'big', 'array']),
      [
        ['this', 'is', 'a', 'test', 'that', 'contains', 'multiple', 'words', 'in', 'a'],
        ['is', 'a', 'test', 'that', 'contains', 'multiple', 'words', 'in', 'a', 'big'],
        ['a', 'test', 'that', 'contains', 'multiple', 'words', 'in', 'a', 'big', 'array']
      ],
      'should return arrays of strings'
    );

    st.deepEqual(
      decagrams(),
      [],
      'should return no n-grams when no value is given'
    );

    st.deepEqual(
      decagrams(['t', 'e', 's', 't', 't', 'e', 's', 't', 't']),
      [],
      'should return no n-grams when nine characters are given'
    );

    st.deepEqual(
      decagrams(['t', 'e', 's', 't', 't', 'e', 's', 't', 't', 'e']),
      [
        ['t', 'e', 's', 't', 't', 'e', 's', 't', 't', 'e']
      ],
      'should return one n-gram when ten characters are given'
    );

    st.end();
  });

  t.end();
});
