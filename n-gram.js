!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.nGram=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * A factory returning a function that converts a given string to n-grams.
 *
 * @example
 *   nGram(2) // [Function]
 *
 * @example
 *   nGram(4) // [Function]
 *
 *
 * @param {number} n - The `n` in n-gram.
 * @throws {Error} When `n` is not a number (incl. NaN), Infinity, or lt 1.
 * @return {Function} A function creating n-grams from a given value.
 */
function nGram(n) {
    if (
        typeof n !== 'number' ||
        n < 1 ||
        n !== n ||
        n === Infinity
    ) {
        throw new Error(
            'Type error: `' + n + '` is not a valid argument for n-gram'
        );
    }

    /*
     * Create n-grams from a given value.
     *
     * @example
     *   nGram(4)('n-gram')
     *   // ['n-gr', '-gra', 'gram']
     *
     * @param {*} value - The value to stringify and convert into n-grams.
     * @return {Array.<string>} n-grams
     */

    return function (value) {
        var nGrams,
            index;

        nGrams = [];

        if (value === null || value === undefined) {
            return nGrams;
        }

        value = String(value);

        index = value.length - n + 1;

        if (index < 1) {
            return nGrams;
        }

        while (index--) {
            nGrams[index] = value.substr(index, n);
        }

        return nGrams;
    };
}

/*
 * Export `n-gram`.
 */

module.exports = nGram;

/*
 * Create bigrams from a given value.
 *
 * @example
 *   bigram('n-gram')
 *   // ["n-", "-g", "gr", "ra", "am"]
 *
 * @param {*} value - The value to stringify and convert into bigrams.
 * @return {Array.<string>} bigrams
 */

nGram.bigram = nGram(2);

/*
 * Create trigrams from a given value.
 *
 * @example
 *   trigram('n-gram')
 *   // ["n-g", "-gr", "gra", "ram"]
 *
 * @param {*} value - The value to stringify and convert into trigrams.
 * @return {Array.<string>} trigrams
 */

nGram.trigram = nGram(3);

},{}]},{},[1])(1)
});