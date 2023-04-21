var maxProduct = function (nums) {

  let max = nums[0],
    imax = nums[0],
    imin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let val = nums[i];
    if (val < 0) {
      let tmp = imax;
      imax = imin
      imin = tmp;
    }
    imax = Math.max(imax * val, val);
    imin = Math.max(imin * val, val);
    max = Math.max(imax, max);
  }
  console.log(max);
  return max;
};


var maxProduct2 = function (nums) {

  let max = -Infinity,
    imax = 1,
    imin = 1;

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (val < 1) {
      let tmp = imax;
      imax = imin;
      imin = tmp;
    }
    imax = Math.max(imax * val, val);
    imin = Math.min(imin * val, val);

    // console.log(imax, imin);
    max = Math.max(imax, max);
  }
  console.log(max);
  return max;
};




maxProduct([2, 3, -2, 4]);

maxProduct([-2, 0, -1]);

maxProduct([-1, -2, -3, 1]);

maxProduct([-3, -2, 0, 2]);

maxProduct([-3, -2, 0, 4]);