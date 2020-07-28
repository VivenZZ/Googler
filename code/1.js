
const arr = [1,2,3]
console.log(Array.isArray(arr)) // true
console.log(arr.constructor === Array) // true
console.log(arr instanceof Object)
console.log(Object.prototype.toString.call(arr) === '[object Array]')