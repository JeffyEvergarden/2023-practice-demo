/**
 * @param {string} path
 * @return {string}
 */
// 去掉尾部 /
// 双// -> /
// ./ --> /
// ..

var simplifyPath = function (path) {
  let arr = []

  let pathStr = path.split('')
  let i = 0
  let str = ''
  while (i < pathStr.length) {
    if (pathStr[i] === '/') {
      if (str === '') {
        str = str + pathStr[i]
      } else if (str === '/') {
        // 消掉一个斜杠
        // 啥也不做
      } else if (str === '/.') {
        // 遇到 ./跳过
        str = '/'
        // 啥也不做
      } else if (str === '/..') {
        str = '/'
        // 数组退一次
        arr.pop()
      } else {
        arr.push(str)
        str = '/'
      }
      console.log([...arr])
    } else {
      str = str + pathStr[i]
    }
    i++
  }
  if (str.endsWith('.') || str.endsWith('/')) {
    if (str === '/..') {
      arr.pop()
    } else if (str.startsWith('/..')) {
      arr.push(str)
    }
  } else {
    arr.push(str)
  }
  let _str = arr.join('')
  console.log(_str)
  return _str === '' ? '/' : _str
}

// 验证答案要求

// simplifyPath('/home/')  ==>  /home

// simplifyPath('/../') ==> /

// simplifyPath('/home//foo/') => /home/foo

// simplifyPath('/a/./b/../../c/')  =>  /c

// simplifyPath('/a//b////c/d//././/..') => /a/b/c

// simplifyPath('/...')   => /...
