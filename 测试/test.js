
let num = 0;

function fetch() {
  return new Promise((a, b) => {
    setTimeout(() => {
      console.log('error')
      b('err')
    }, 1000)
  })
}


function load(onError) {
  const p = fetch()
  return p.catch(err => {
    return new Promise((a, b) => {
      const retry = () => {
        a(load(onError))
      }

      const fail = () => {
        reject(err);
      }

      onError(retry, fail)
    })
  })
}



load((retry) => {
  retry()
})