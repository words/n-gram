export var bigram = nGram(2)
export var trigram = nGram(3)

/**
 * Factory returning a function that converts a value string to n-grams.
 *
 * @param {number} n
 */
export function nGram(n) {
  if (
    typeof n !== 'number' ||
    Number.isNaN(n) ||
    n < 1 ||
    n === Number.POSITIVE_INFINITY
  ) {
    throw new Error('`' + n + '` is not a valid argument for `n-gram`')
  }

  return grams

  /**
   * Create n-grams from a given value.
   *
   * @param {string|string[]} [value]
   */
  function grams(value) {
    /** @type {(typeof value)[]} */
    var nGrams = []
    /** @type {number} */
    var index
    /** @type {typeof value} */
    var source

    if (value === null || value === undefined) {
      return nGrams
    }

    source = value.slice ? value : String(value)
    index = source.length - n + 1

    if (index < 1) {
      return nGrams
    }

    while (index--) {
      nGrams[index] = source.slice(index, index + n)
    }

    return nGrams
  }
}
