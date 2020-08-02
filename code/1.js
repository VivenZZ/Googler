
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.job = 'doctor'
let p1 = new Person('viven', 23)
// 判断是否是原型上的属性
function hasPrototypeProperty(object, name){
  return !object.hasOwnProperty(name) &&  (name in object)
}
console.log(hasPrototypeProperty(p1, 'name')); // false
console.log(hasPrototypeProperty(p1, 'job')); // true

for(let key in p1) {
  console.log(key)
}
let keys =Object.keys(p1)
console.log(keys); // [ 'name', 'age' ]