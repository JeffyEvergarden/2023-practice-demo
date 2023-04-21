var MinStack = function () {
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let len = this.stack.length;
  if (len > 0) {
    return this.stack[len - 1]
  }
  return null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let len = this.stack.length;
  if (len > 0) {
    let min = this.stack[0]
    this.stack.forEach((val)=> {
      if(min > val) {
         min = val
      }
    })
    return min;
  }
  return null
};