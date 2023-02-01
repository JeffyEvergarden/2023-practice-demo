var longestConsecutive = function (nums) {
  let max = 1;
  let cur = 1;

  let set = new Set(nums);

  for (let k of set) {
    let cur = 1
    while (set.has(k + 1)) {
      cur++;
      k++;
    }
    if (cur > max) {
      max = cur
    }
  }
  return max
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))