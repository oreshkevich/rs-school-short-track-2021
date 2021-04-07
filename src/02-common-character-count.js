/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let k1 = s1;
  let k2 = s2;
  let count = 0;
  while (k1.length && k2.length) {
    if (k2.includes(k1.charAt(0))) {
      count++;
      k2 = k2.replace(k1.charAt(0), '');
      k1 = k1.slice(1);
    } else {
      k1 = k1.slice(1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
