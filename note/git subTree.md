# 多个项目公用同一个页面模块的解决方案
最近遇到一个需求。有3个项目公用同一套菜单、字典等通用的页面。其实在启动第二个项目的时候，前端这边就已经不太好操作了。因为改一个问题要改两次，非常不方便。何况现在第三个项目要通用这个模块，在网上搜了很多解决方案。有<font color="red">微前端、git subTree,npm 管理</font>。
1. 微前端：主要是项目对项目，是做项目分离，用路由去匹配对应的项目来解决的，而我这个项目只是单纯的页面，所以没必要弄的那么复杂。
2. npm管理，这个要放在npm服务上，或者搭建私服，和java的maven差不多的意思。不过我们需要的是页面，里面有业务逻辑和私有的东西，不方便暴露，而且经常需要修改的。频繁的发布，拉取也不方便。个人感觉更加适合一些公用组件，或者是通用方法的封装这些不需要频繁改动的东西。

## git subTree
git subTree是git官方推荐的一款公共仓库的管理工具。
### git subTree的优点：
对于项目中的其他成员是透明的，也就是说如果看目录，和普通的目录根本没有差别。
### git subTree的缺点：
子仓库更新，推送命令复杂（这点非常容易解决）

## 需求
有A项目和B项目，目录结构大概是
```js
A - a  B - b 
  - s    - s
```
两个项目都同时有`s`模块，那么这样我们就可以单独把`s`模块抽离出来，放入一个新的仓库中，新的仓库就叫`S`

### 解决方案
1. 在需要引入的项目A 或者B 中 先给S模块起个别名，我这里起名basicpage
```git
git remote add basicpage 项目地址
```
2. 引入项目
```git
git subtree add --prefix=需要放的位置 basicpage  项目分支 是否做一次提交
git subtree add --prefix=src/basic basicpage  master --squash
```
```js
A - a  B - b 
  - s    - s
  - src/basic -s
```
这样会在项目的src目录下生成一个basic目录，里面就是S项目。
我们只要在A项目的模块s中的页面中引入basic目录下的文件就可以使用了。
3. 推送
```git
git subtree push --prefix=项目放的位置 basicpage  项目分支 
git subtree push --prefix=src/basic basicpage  master
```
4. 拉取
```git
git subtree pull --prefix=项目放的位置 basicpage  项目分支 
git subtree pull --prefix=src/basic basicpage  master
```
5. 如果嫌命令太长可以在page.json中添加命令
```json
    "git_push:basic": "git subtree push --prefix=src/basic basicpage  master",
```

当然还有一些分支类的命令，大家自己可以去研究了，这里只是简单的用法。

## 闭包
### 闭包的原理
闭包是指有权访问另一个函数作用域中的变量的函数
```js
function compare(propertyName){
  return function (obj){
    // 这个匿名函数中可以访问compare函数中的propertyName变量
    return obj[prototyName]
  }
}
compare()
```
### 作用域链
* <font color='red'>当函数被调用时</font>，会创建一个执行环境以及相应的作用域链
* 使用arguments和命名参数创建一个活动对象。
* 后台每个执行环境都会有一个表示变量的对象，变量对象。全局的变量对象一直存在，函数的变量对象只存在函数执行的过程中。
* compare函数执行的时候会创建一个包含全局的作用域链，这个作用域链保存在内部的[[scope]]属性中。
* 当调用compare函数的时候，会创建一个执行环境，然后复制[[scope]]中的对象，构造出执行环境中的作用域链
* <font color='red'>作用域链本质上时指向变量对象的一个指针，是一个引用。</font>

```js
function createFunctions(){
  let result = []
  for(var i = 0; i < 10; i++){
    result[i] = function(){
      console.log(i)
    }
  }
  return result
}
let funs = createFunctions()
funs.forEach(fn=>{
  fn()
})
```
这里输出10个10，因为作用域链指向的是变量对象的一个指针，是引用类型的。所以最后的i都是10
如果要改成打印0~9，可以通过两种办法，一种是通过一个自执行的函数传入参数，因为参数是按值传递的，可以得到每次的i的值。二是通过设置for里面的var 为let，因为let是块级作用域，而且for循环每次生成的i都是互相独立的，但是能自动记录上次的值，所以每次for循环都会重新生成let i=xx。这样每个函数引用的都是不同的i。
```js
// 1 传值
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
  fn()
})
```
```js
// 1 let
function createFunctions(){
  let result = []
  for(let i = 0; i < 10; i++){
    result[i] = function(){
      console.log(i)
    }
  }
  return result
}
let funs = createFunctions()
funs.forEach(fn=>{
  fn()
})
```