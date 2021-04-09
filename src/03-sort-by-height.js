/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 const arrOfOnes = [];
  const array = arr.map((el, idx) => {
    if (el === -1) arrOfOnes.push(idx);
    return el;
  }).sort((a, b) => a - b).filter((el) => el !== -1);
  arrOfOnes.forEach((indexOfMinusOne) => array.splice(indexOfMinusOne, 0, -1));
  return array;
}

module.exports = sortByHeight;
