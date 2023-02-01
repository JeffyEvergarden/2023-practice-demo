const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'

class BasePromise {
  constructor(fn) {
    this.status = PENDING
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  reslove(val) {
    this.val = val
    this.status = FULFILLED
  }

  reject(err) {
    this.val = val
    this.status = REJECTED
  }

  then() {

  }

  catch () {

  }
}