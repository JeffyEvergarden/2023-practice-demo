// ----
// -----------
var singleNumber = function (nums) {
  int ans = 0; // 应该的值
  for (int i = 0; i < 32; ++i) {
    int total = 0;
    for (int num of nums) {
      total += ((num >> i) & 1);
    }
    if (total % 3) { // 该位应该填1
      ans |= (1 << i);
    }
  }
  return ans;
}


// 最上面方法改成
// 加上async
const Recordxxxx = async (a, b, c, d) => {
  // ....其他代码
  // ----
  let p = await new Promise((reslove, reject) => {
    XddSdk.recordTaskTime(params, function (res) {
      //...
      //最后
      reslove(isSuccess);
    }, fucntion(err) {
      //...
      //最后
      reslove(isSuccess);
    })
  })

  // 最后
  return p;
}


// 然后用到这个方法的方法要加 async
// 比如想 判断为 true or false 地方
async () => {

  let flag = await Recordxxxx()
  if (flag) {

  }
}