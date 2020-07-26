let arr = [1,2,3,4,3,2,NaN,2,NaN,null,null,undefined,undefined,{a:1},{a:1}]
let set = new Set(arr)
console.log(set.has({a:1}))