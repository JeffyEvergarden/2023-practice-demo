const obj = {
  foo: 1,
  get bar() {
    return this.foo
  }
}

console.log(obj.bar)
obj.bar = 10
console.log(obj.bar)
console.log(obj)