import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // 请将看完此demo，将应用再项目中后删除掉此组件，主要方便大家查看用法
      name: 'HelloWorld',
      component: () => import('@/views/HelloWorld'),
      meta: {
        title: 'demo'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 页面title更替，若不需要可注释
  document.title = to.meta.title
  next()
})
export default router
