// 1. postState 会直接监听 history api 里的go、forward、back
// 2. popstate无法监听 history.pushState和history.replaceState

window.addEventListener('popstate', (e) => {
  console.log(e)
})

let _wr = function (str) {
  let fn = history[str]
  return function () {
    console.log(this)
    let rv = fn.apply(this, arguments)
    // let e = new Event('popstate')
    let e = new Event(str)
    e.arguments = arguments
    window.dispatchEvent(e)
    return rv
  }
}

history.pushState = _wr('pushState')
history.replaceState = _wr('replaceState')

// 此后可以监听
window.addEventListener('pushState', (e) => {
  console.log(e)
})
window.addEventListener('popState', (e) => {
  console.log(e)
})
