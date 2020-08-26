### 基于element-ui做npm组件的二次封装
1. 首先使用使用vue-cli创建新项目。我在这里使用`vue ui`可视化界面，然后在插件中搜索element-ui插件。安装好后，全局引用。
2. 在src目录下创建packages文件夹，下面在创建几个文件，整个目录和element的一样。如下：
    ```
    -src
        -packages
            -demo
                -src
                    demo.vue
                index.js
            index.js
    ```
3. demo.vue
    ```vue
    <template>
      <div>
        <p>测试</p>
        <el-button>el-button</el-button>
      </div>
    </template>
    <script>
    export default {
      name: 'DsrasTest'
    }
    </script>
    ```
4. -demo/index.js
    ```js
    import DsrasTest from './src/dsras-test'
    
    DsrasTest.install = function(Vue) {
      Vue.component(DsrasTest.name, DsrasTest)
    }
    
    export default DsrasTest
    ```
5. -packages/index.js
    ```js
    import DsrasTest from './dsras-test'
    const components = [
      DsrasTest
    ]
    
    const install = function(Vue) {
      components.forEach(component => {
        Vue.component(component.name, component);
      });
    }
    
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue);
    }
    
    export default {
      install,
      DsrasTest
    }
    ```
6. 修改package.json，在已有的基础上添加如下代码
    ```json
    {
      "name": "vue-element-ui-dsras",  // 名称 发布npm使用，不能和别人的重复，不然会报错。
      "version": "0.2.0", // 版本号
      "private": false, // 是否私有
      "description": "医疗组件测试", // 描述
      "main": "lib/vue-element-ui-dsras.common.js", // 入口
      "scripts": { 
        "lib": "vue-cli-service build --target lib --dest lib ./src/packages/index.js" // 打包成库的命令，发布到npm前使用
      }
    }
    ```
7. 发布到npm
    - 注册
    - 登录 `npm login`
    - 切换npm源 `npm config set registry https://registry.npmjs.org` 
    - 发布 `npm publish`
    - 切换回淘宝源，方便其他地方使用 ` npm config set registry https://registry.npm.taobao.org`
8. 完成发布，使用的时候和element 一样引用即可！
