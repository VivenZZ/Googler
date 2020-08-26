function *gen(){
  yield 'hello'
  yield 'world'
  return 'ending'
}
let hw = gen()
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());