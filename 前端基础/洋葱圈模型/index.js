
const compose = (middlewares)=> {

  fucntion dispatch(content, i) {
    const fn = middlewares[i];

    if(!fn) {
      return Promise.resolve();
    }

    return new Promise((resolve)=> {
      reslove(fn(content, function next(){
        return dispatch(content, i + 1)
      }))
    })
  }
  return function (ctx) => {
    return dispatch(ctx, 0)
  }

}