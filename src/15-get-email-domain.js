/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  let k = '';
  let address = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) === 64) {
      k = arr.slice(i + 1);
    }
  }
  address = k.join('');
  return address;
}

module.exports = getEmailDomain;
