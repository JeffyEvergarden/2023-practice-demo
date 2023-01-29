// 原装 promise

const fn = async () => {
  let fake = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30)
    }, 2000)
  }).then((val)=>{
    return 20
  })
  console.log(fake);
}

// 基础 promise 实现版本

