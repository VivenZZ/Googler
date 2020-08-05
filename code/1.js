
function createFunctions(){
  let result = []
  for(var i = 0; i < 10; i++){
    result[i] = function(num){
        return function(){
          console.log(num)
        }
      }(i)
  }
  return result
}
let funs = createFunctions()
funs.forEach(fn=>{
  fn(0)
})