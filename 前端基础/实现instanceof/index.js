function myInstanceOf(left, right) {
  if (!left) {
    return false
  }
  // Object.getPrototypeOf(obj)
  const proto = left.__proto__
  while (right !== null) {
    if (proto === right.prototype) {
      return true
    }
    proto= proto.__proto__
  }
  return false
}


function myInstanceOf2 (left, right) {
  if(!left) {
    return false
  }
  let proto = left.__proto__
  
  while(proto !=== null) {
     if(proto === right.prototype) {
      return true
     }
     proto = proto.__proto__
     //  proto = Object.getPrototypeOf(proto);
  }
  
  return false

}