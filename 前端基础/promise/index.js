// 原装 promise

const fn = async () => {
  let fake = await new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(10)
      reject(10)
    }, 2000)
  }).then((val) => {
    console.log(val)
    return val + 10
  }, (err) => {
    console.log(err);
    return err - 10
  }).catch(err => {
    console.log('catch:', err)
  })
  console.log(fake);
}

fn();

// 基础 promise 实现版本