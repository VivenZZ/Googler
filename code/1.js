function maxVal(arr, len) {
  let maxArr = []
  for(let i = 0; i < arr.length - len + 1; i++) {
    maxArr.push(Math.max(...arr.slice(i, i + len)))
  }
  return maxArr
}
console.log(maxVal([1,3,-1,-3,5,3,6,7], 3))