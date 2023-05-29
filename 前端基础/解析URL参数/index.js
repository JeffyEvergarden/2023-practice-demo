const parseUrl = (url) => {
  if (!url) {
    return
  }
  let urlParams = url.split('?')
  urlParams = urlParams && urlParams[1]
  if (!urlParams) {
    return {}
  }

  let obj = {}
  let arr = urlParams.split('&')
  arr.forEach((str) => {
    let _str = str.split('=')
    obj[_str[0]] = _str[1]
    let val = decodeURI(_str[1])
    obj[_str[0]] = val
    // 处理 true / false / undefined
  })
  console.log(obj)
  return obj
}

var url = 'http://127.0.0.1/e/action/ShowInfo.php?classid=9&id=2'
function parse_url(_url) {
  var pattern = /(\w+)=(\w+)/gi
  var parames = {}
  url.replace(pattern, function (a, b, c) {
    console.log(a, b, c)
    parames[b] = c
  })
  console.log(parames)
  return parames
}

parseUrl('https://www.baidu.com?url=1&abc=2&cd=3')

parse_url(url)
