var reverseWords = function (s) {
  let arr = s.split(' ');
  arr.reverse();
  let i = 0;
  arr = arr.filter(item => item !== '');
  return arr.join(' ')
};