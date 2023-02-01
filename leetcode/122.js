var maxProfit = function (prices) {
  let total = 0;
  let len = prices.length;
  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1]
    }
  }
  return total;
};

let arr = [1,2,3,4,5]

console.log(maxProfit(arr))