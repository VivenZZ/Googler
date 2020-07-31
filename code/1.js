
let arr = [1,2,3,4,5,6,7]
// 删除第二项
console.log(arr.splice(1,1)) // [2]
console.log(arr) // [1,3,4,5,6,7]
// 修改第二项
console.log(arr.splice(1,1,8)) // [3]
console.log(arr) // [1,8,4,5,6,7]
// 删除8，4，新增9，10，11
console.log(arr.splice(1,2,9,10,11)) // [8,4]
console.log(arr) // [1,9,10,11,5,6,7]

// 新增
console.log(arr.splice(1,0,12)) // []
console.log(arr) // [1,12, 9,10,11,5,6,7]