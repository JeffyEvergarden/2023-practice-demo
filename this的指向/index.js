var obj = {
  a: 10,

  getFun() {
    return this
  },

  getFunThis() {
    function fn() {
      console.log(this)
    }
    fn()
  }
}

console.log(obj.getFun())

console.log(obj.getFunThis())
