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

