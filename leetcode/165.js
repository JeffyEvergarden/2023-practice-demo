var compareVersion = function (version1, version2) {
  let v1Arr = version1.split('.').map(item => Number(item));
  let v2Arr = version2.split('.').map(item => Number(item));
  while (v1Arr.length > 0 && v1Arr[v1Arr.length - 1] === 0) {
    v1Arr.pop()
  }
  while (v2Arr.length > 0 && v2Arr[v2Arr.length - 1] === 0) {
    v2Arr.pop()
  }

  let i = 0;

  while (i < v1Arr.length && i < v2Arr.length) {
    if (v1Arr[i] == v2Arr[i]) {
      i++;
    } else {
      return v1Arr[i] > v2Arr[i] ? 1 : -1
    }
  }
  if (v1Arr.length === v2Arr.length) {
    return 0;
  }
  return i === v1Arr.length ? -1 : 1;
};