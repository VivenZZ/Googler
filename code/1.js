
function Person(name, age) {
  this.name = name
  this.age = age
  Person.prototype.getName = function() {
    console.log(this.name)
  }
}
  
let p1 = new Person('viven', 23)
let p2 = new Person('kevin', 23)
p1.getName()
p2.getName()
console.log(p1.getName === p2.getName);