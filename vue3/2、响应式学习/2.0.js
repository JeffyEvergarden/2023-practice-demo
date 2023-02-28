// 关于 调度方法

const jobQueue = new Set();

const p = Promise.resolve();

let isFlushing = false;


function flushJob() {

  // 正在刷新返回
  if (isFlushing) return;
  isFlushing = true

  p.then(() => {
    // 调度执行
    jobQueue.forEach(job => job())
  }).finally(() => {
    isFlushing = false
    jobQueue.clear();// 执行完要清除
  })

}


// effect(() => {
//   console.log(obj.foo)
// }, {
//   scheduler(fn) {
//     jobQueue.add(fn);
//     flushJob();
//   }
// })