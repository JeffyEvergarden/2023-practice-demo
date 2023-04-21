var fractionToDecimal = function (numerator, denominator) {

  const getNum = (val) => {
    val = parseInt(val);
    if (val <= 0) {
      return 1;
    }

    let num = 0;

    while (val !== 0) {
      val = parseInt(val / 10);
      num++;
    }
    return num;
  }

  let flag = numerator >= 0 && denominator >= 0 || numerator <= 0 && denominator <= 0 ? '' : '-';

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let arr = [];

  while (denominator !== parseInt(denominator)) {
    denominator *= 10;
    numerator *= 10;
  }
  // 原数
  let origin = numerator;
  let i = 0;

  let set = new Set();
  let map = {}
  let first = true;

  // 获取位数 
  const index = getNum(origin / denominator);

  console.log(index);

  while (numerator) {

    if (set.has(numerator) && i >= index) {
      let key = map[numerator]
      //console.log('遇到了:' + numerator, `当前i位:${i}, 值为${arr[i - 1]}, key为:${key}`)
      arr[i] = ')'
      arr.splice(key, 0, '(')
      // console.log([...arr]);
      break;
    }

    if (i >= index) {
      set.add(numerator) // 未到达过加入
      // console.log(`add map ${i}: ${numerator}`)
      map[numerator] = i;
    }


    if (numerator < denominator) {
      // 补数
      numerator = numerator * 10;
      arr.push(0);
    } else {
      arr.push(parseInt(numerator / denominator))
      numerator = (numerator % denominator) * 10;
      // console.log([...arr])
    }
    i++;

    if (i > 1000) {
      break;
    }
  }

  let val = arr.join('');


  if (val.length > index) {
    // console.log(arr, index);
    arr.splice(index, 0, '.');
    val = arr.join('')
  } else if (val.length === index) {} else {
    val = 0
  }
  console.log('value:' + flag + val);
  return flag + val
};
fractionToDecimal(10, 3) // 3.(3)
fractionToDecimal(1, 3) // 0.(3)
fractionToDecimal(2, 1) // 2
fractionToDecimal(1, 2) //  0.5
fractionToDecimal(4, 333) // 0.(012)
fractionToDecimal(40, 333) // 0.(120)
fractionToDecimal(1, 6) // 0.1(6)
fractionToDecimal(0, 3) // 0
fractionToDecimal(500, 10) // 50
fractionToDecimal(-50, 8) // -6.25
fractionToDecimal(1, 214748364); // pass
fractionToDecimal(2147483647, 37);