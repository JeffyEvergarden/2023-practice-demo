export default [
  {
    path: '/',
    redirect: '/home'
  }
]

let time = 0
let now = 0

const timefn = () => {
  time++
  window.requestAnimationFrame(timefn)
}
timefn()

setInterval(() => {
  now++
  console.log((time / now).toFixed(0))
}, 1000)
