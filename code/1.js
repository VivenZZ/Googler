
function A(name){
  this.name = name
  this.colors = ['red','green','yellow']
}
function B(name, age){
  this.age = age
  A.call(this, name)
}
A.prototype.getName = function(){
  console.log(this.name)
}
// B的原型需要的是A的原型，所以我们先创建一个A的原型的副本，添加给B就可以了
B.prototype = Object.create(A.prototype)
B.prototype.constructor = B
let b1 = new B('viven', 23)
let b2 = new B('kevin', 26)
b1.colors.push('black')
console.log(b1.name,b1.age,b1.colors.toString()) // viven 23 red,green,yellow,black
console.log(b2.name,b2.age,b2.colors.toString()) // kevin 26 red,green,yellow
b1.getName()
b2.getName()