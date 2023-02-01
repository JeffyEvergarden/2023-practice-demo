s = "A man, a plan, a canal: Panama"
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sArr = s.split('')
  let cArr = sArr.filter(k => (/[a-zA-Z0-9]/).test(k)).map(k => k.toLocaleLowerCase())
  let i = 0;
  let j = cArr.length - 1;
  console.log(cArr)
  if (
    cArr.length <= 1
  ) {
    return true
  }
  while (i <= j) {
    if (cArr[i] === cArr[j]) {
      i++;
      j--;
    } else {
      break;
    }
  }
  if (i > j) {
    return true
  }
  return false
};
console.log(
  isPalindrome("ab_a")
)