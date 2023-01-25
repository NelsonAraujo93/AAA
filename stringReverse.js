const stringReverse = (string) => {
  const splitString = string.split('');
  const reverseSplit = splitString.reverse();
  const reverseString = reverseSplit.join('');
  return reverseString;
};

module.exports = stringReverse;