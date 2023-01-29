Promise._all = function (arr) {
  let list = new Array(arr.length);
  let len = 0;
  let hasError = false
  return new Promise((reslove, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(val => {
        list[i] = val
        len++;
        len === arr.length && reslove(list);
      }, err => {
        !hasErr && reject(error)
        hasErr = true
      })
    }
  })
}



Promise._race = function (arr) {
  let list = new Array(arr.length);
  let len = 0;
  let hasError = false
  return new Promise((reslove, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(val => {
        reslove(val);
      }, err => {
        reject(err)
      })
    }
  })
}