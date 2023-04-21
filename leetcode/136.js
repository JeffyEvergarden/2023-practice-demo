var singleNumber = function (nums) {
  // 使用异或
  let single = 0;
  for (let num of nums) {
    single ^= num;
  }
  return single
};