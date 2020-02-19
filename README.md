# vue2x-demo-m

**提示：此为通用2xdemo，请勿在此修改提交，需要的脚手架的或者部分内容的，拷贝走**

# vue-pc

> A Vue.js project  Vue栈m端demo
>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for testing
npm run devtest

# build for production with minification
npm run build:test / npm run build:prod 

# build for production and view the bundle analyzer report
npm run build:test --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目结构

```
--build   // 构建脚本目录
--config  // 构建配置目录
--dist   // npm run build 之后再生成的目录（名称可以配置）
--src  
  --components   // 存放公共组件
  --views    // 页面组件，由vue-router引入
  --router  //路由
  --vuex   // 数据流管理
  --assets // 静态资源
  --fetch  // 数据接口处理
  --plugins //  插件
  --lang // 多语言
  --filters // 过滤器
  --directives // 指令集合
  --util  // 工具类
  main.js   // 入口文件
  app.vue   // 主组件 
--static   // 静态文件目录
.babelrc    // babel编译参数
.editorconfig  // 代码格式
.eslintignore  // es检查忽略
.eslintrc  // es语法检查配置
.postcssrc  // 转化css配置
.gitignore  // git忽略上传文件
app.js  // app服务
index.html  // 静态文件入口
package.json  // 配置文件
```
## 修改部分

*以下为cli 2x脚手架init之后一些常规处理，和常用技术解决方案，标注 （可选应用）的，可根据项目需要增减*

> 添加代理(config/index.js  dev => proxyTables)
>
> 添加图片压缩（image-webpack-loader）
>
> 生产环境去除多余多警告、debugger、console（Plugin）
>
> 区分环境(由于目前开发似乎两个环境够了，在这里先不做准生产环境的拆分，有需求再做)
>
> 添加过滤器（main.js）
>
> 修改router为history方式懒加载（router）
>
> 添加px2rem (postcss-pxtorem)
>
> 添加vuex 模块化分装(main.js)
>
> ​	1、moudles 区分业务模块，进行state mutations actions 处理
>
> ​	2、提取getters 统一处理，一目了然
>
> ​	3、提取type 使用常量替代 Mutation 事件类型	
>
> ​	4、统一输出口store 挂载再vue实列上
>
> 添加异步模块化分装（axios）
>
> ​	1、拦截器分装处理，包括，非200各种状态值统一处理
> ​	2、url，统一管理，处理网关和生产，开发不同域名等
> ​	3、请求方法，统一包装
> ​	4、结合2、3、4分模块做请求处理
> ​	5、最后assgin，暴露api，进行请求
>
> 添加拦截器（main.js）
>
> keepAlive缓存路由配置正则匹配更方便（app.vue）
>
> 添加views文件夹存放页面组件
>
> 添加路径别名（alias 由于常用就以下几个文件，就不做src下文件遍历全部进行别名定义）：
>
> ​	'@': resolve('src'),
>
> ​	 'fetch': resolve('src/fetch'),
>
> ​	 'components': resolve('src/components'),
>
> ​	 'assets': resolve('src/assets'),
>
> ​	 'util': resolve('src/util'),
>
> ​	 'views': resolve('src/views')
>
> 添加路由动画（app.vue）**（*可选应用*）**
>
> 添加pagetitle（router）**（*可选应用*）**
>
> 本地多语言配置**（*可选应用*）**
>
> iView 配置**（*可选应用*）**
>
> * 多语言处理
> * 按需加载
>



## 技术体系

> Vue-cli2x 脚手架
>
> vue全家桶（vue+vue-router+vuex）
>
> [mint-ui](https://github.com/ElemeFE/mint-ui) 推荐使用
>
> axios
>
> es6、7
>
> less

## 前端开发规范

1、文件大写字母开头，文件夹小写开头

2、[遵循eslint规范](http://eslint.cn/)  使用vscode、webstorm IDE的开发同学推荐安装ESlint插件，来提高开发效率

## 版本管理工具

- IDE自带git启用
- 命令行 git-base、shell、consoleZ、Cmder（windows推荐使用）iTerm2(mac用户推荐使用) 
- sourceTree 图形化界面管理（推荐）

根据自己喜好选择