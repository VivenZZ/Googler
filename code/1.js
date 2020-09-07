function deepClone(obj) {
    let constructor = Object.prototype.toString.call(obj).slice(8,-1) // [object object]
    let res
    if(constructor === 'Array'){
        res = []
    }
    if(constructor === 'Object'){
        res= {}
    }
    for (const item in obj) {
        if(typeof obj[item] === 'object') {
            res[item] = deepClone(obj[item])
        } else if (typeof obj[item] === 'function') {
            res[item] = new Function('',"return " + obj[item].toString())()
        } else {
            res[item] = obj[item]
        }
    }
    return res
}
离职原因：有两方面原因，第一个是公司项目的完结，后面就是一些迭代或者是调优的需求。对自己的成长帮助比较小，
而且据领导说明，以后大概也没什么机会转管理岗位了。

前端优化：10多秒，两个慢，一个是因为机器老旧exe启动慢，一个是页面请求接口比较多，数据关联比较多，请求慢。
针对第一个exe启动慢，我实现了一个单例模式，只调用一个程序，每次关闭，都是隐藏程序，这样直接启动。
针对第二个请求慢，首先让后台进行接口合并，部分接口多次调用相同的数据表。第二个是后台建立视图和索引，加快查找。
最后启动的时候达到了1秒左右，主要原因还是机器性能太差了。

vuerouter 原理
1，hash模式
默认模式，通过路径中的hash值来控制路由跳转，不存在兼容问题
2，history模式
H5新增的 history API，相对hash而言，不会显示#号，但是需要服务器端配置

$route是路由信息对象，包括path、params、hash、query、fullPath、meta、name等路由信息参数，可以通过$route来获取当前路由的各种参数,
$router是路由实例对象，包含的是VueRouter实例上的方法以及配置属性，常用于编程式导航；

复用组件时，想对路由参数的变化作出响应的话， 可以watch (监测变化) $route 对象
const User = {
    template: '...',
    watch: {
        '$route' (to, from) {
            // 对路由变化作出响应...
        }
    }
}

1、全局守卫： router.beforeEach

2、全局解析守卫： router.beforeResolve

3、全局后置钩子： router.afterEach

4、路由独享的守卫： beforeEnter

5、组件内的守卫： beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeave
