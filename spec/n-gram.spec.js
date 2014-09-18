'use strict';

/**
 * Module dependencies (n-gram, assert).
 */

var nGram = require('..'),
    assert = require('assert');

describe('n-gram()', function () {
    it('should throw when given `0`', function () {
        assert.throws(function () {
            nGram(0);
        });
    });

    it('should throw when given negative numbers', function () {
        assert.throws(function () {
            nGram(-1);
        });

        assert.throws(function () {
            nGram(-Infinity);
        });
    });

    it('should throw when not given a number', function () {
        assert.throws(function () {
            nGram(true);
        });

        assert.throws(function () {
            nGram('some text');
        });
    });

    it('should throw when given `Infinity`', function () {
        assert.throws(function () {
            nGram(Infinity);
        });
    });
});

describe('n-gram(1)', function () {
    var getUnigrams;

    it('should be a function', function () {
        getUnigrams = nGram(1);
        assert(typeof getUnigrams === 'function');
    });

    it('should return an Array', function () {
        assert(Array.isArray(getUnigrams()));
    });

    it('should return strings', function () {
        getUnigrams('test').forEach(function (unigram) {
            assert(typeof unigram === 'string');
        });
    });

    it('should return strings with a length of `1`', function () {
        getUnigrams('test').forEach(function (unigram) {
            assert(unigram.length === 1);
        });
    });

    it('should return no n-grams when no value is given', function () {
        assert(getUnigrams().length === 0);
    });

    it('should return one n-gram when one character is given', function () {
        var unigrams = getUnigrams('a');

        assert(unigrams[0] === 'a');
        assert(unigrams.length === 1);
    });

    it('should return two n-grams when two characters are given',
        function () {
            var unigrams = getUnigrams('ab');

            assert(unigrams[0] === 'a');
            assert(unigrams[1] === 'b');
            assert(unigrams.length === 2);
        }
    );

    it('should work', function () {
        assert(getUnigrams('test').join('|') === 't|e|s|t');
    });
});

describe('n-gram(2)', function () {
    var getBigrams;

    it('should be a function', function () {
        getBigrams = nGram(2);
        assert(typeof getBigrams === 'function');
    });

    it('should return an Array', function () {
        assert(Array.isArray(getBigrams()));
    });

    it('should return strings', function () {
        getBigrams('test').forEach(function (bigram) {
            assert(typeof bigram === 'string');
        });
    });

    it('should return strings with a length of `2`', function () {
        getBigrams('test').forEach(function (bigram) {
            assert(bigram.length === 2);
        });

        getBigrams('tests').forEach(function (bigram) {
            assert(bigram.length === 2);
        });

        getBigrams('testsa').forEach(function (bigram) {
            assert(bigram.length === 2);
        });
    });

    it('should return no n-grams when no value is given', function () {
        assert(getBigrams().length === 0);
    });

    it('should return no n-grams when one character is given', function () {
        assert(getBigrams('a').length === 0);
    });

    it('should return one n-gram when two characters are given',
        function () {
            var bigrams = getBigrams('ab');

            assert(bigrams[0] === 'ab');
            assert(bigrams.length === 1);
        }
    );

    it('should work', function () {
        assert(getBigrams('test').join('|') === 'te|es|st');
    });
});

describe('n-gram(3)', function () {
    var getTrigrams;

    it('should be a function', function () {
        getTrigrams = nGram(3);
        assert(typeof getTrigrams === 'function');
    });

    it('should return an Array', function () {
        assert(Array.isArray(getTrigrams()));
    });

    it('should return strings', function () {
        getTrigrams('test').forEach(function (trigram) {
            assert(typeof trigram === 'string');
        });
    });

    it('should return strings with a length of `3`', function () {
        getTrigrams('test').forEach(function (trigram) {
            assert(trigram.length === 3);
        });

        getTrigrams('tests').forEach(function (trigram) {
            assert(trigram.length === 3);
        });

        getTrigrams('testsa').forEach(function (trigram) {
            assert(trigram.length === 3);
        });
    });

    it('should return no n-grams when no value is given', function () {
        assert(getTrigrams().length === 0);
    });

    it('should return no n-grams when one character is given', function () {
        assert(getTrigrams('a').length === 0);
    });

    it('should return no n-grams when two character are given', function () {
        assert(getTrigrams('ab').length === 0);
    });

    it('should return one n-gram when three characters are given',
        function () {
            var trigrams = getTrigrams('abc');

            assert(trigrams[0] === 'abc');
            assert(trigrams.length === 1);
        }
    );

    it('should work', function () {
        assert(getTrigrams('test').join('|') === 'tes|est');
    });
});

describe('n-gram(10)', function () {
    var getTenGrams;

    it('should be a function', function () {
        getTenGrams = nGram(10);
        assert(typeof getTenGrams === 'function');
    });

    it('should return an Array', function () {
        assert(Array.isArray(getTenGrams()));
    });

    it('should return strings', function () {
        getTenGrams('abcdefghij').forEach(function (tenGram) {
            assert(typeof tenGram === 'string');
        });
    });

    it('should return strings with a length of `10`', function () {
        getTenGrams('abcdefghij').forEach(function (tenGram) {
            assert(tenGram.length === 10);
        });

        getTenGrams('abcdefghijk').forEach(function (tenGram) {
            assert(tenGram.length === 10);
        });
    });

    it('should return no n-grams when no value is given', function () {
        assert(getTenGrams().length === 0);
    });

    it('should return no n-grams when one character is given', function () {
        assert(getTenGrams('a').length === 0);
    });

    it('should return no n-grams when nine characters are given',
        function () {
            assert(getTenGrams('abcdefghi').length === 0);
        }
    );

    it('should return one n-gram when tens characters are given',
        function () {
            var tenGrams = getTenGrams('abcdefghij');
            assert(tenGrams[0] === 'abcdefghij');
            assert(tenGrams.length === 1);
        }
    );

    it('should work', function () {
        assert(
            getTenGrams('abcdefghijk').join('|') ===
            'abcdefghij|bcdefghijk'
        );
    });
});
