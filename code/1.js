const Login = require('./2.js')
const PASSWORD = Symbol()
const login = new Login('admin', '123456')
console.log(login.checkPassword('123456'))
console.log(login.username)
console.log(login[PASSWORD])
console.log(login['PASSWORD']) // undefined