var maxProfit = function (prices) {
  let max = 0;
  let len = prices.length;
  if (prices.length <= 1) {
    return 0;
  }

  let maxArr = new Array(len).fill(0);
  let minP = prices[0];
  let index = 0;
  for (let i = 1; i < len; i++) {
    maxArr[i] = Math.max(maxArr[i - 1], prices[i] - minP);
    if (minP > prices[i]) {
      minP = prices[i]
      index = i;
    }
    if (maxArr[i] > max) {
      max = maxArr[i]
    }
  }

  return max;
};

const arr = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(arr));