<template>
  <div id="app">
    <transition :name="transitionName" >
      <keep-alive :include="/^[\w\W]*_keepAlive$/">
        <router-view  class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  created () {
    this.$api.AnnualProductionOilAndGas().then(() => {})
    console.log('build ', process.env)
  },
  // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/lib/_lib-rem.less";

// 全局css样式 reset 如：reset -> marin，padding,字体字号等
@import "./assets/css/reset.less";
// 全局公共样式统一修订，如button，table，input，外部框架等
@import "./assets/css/common.less";
// 如需全局reset iview 样式，请再创建一个less文件在此注入

.child-view {
  min-width: 980px;
  // position: relative;
  height: auto;
  transition: all .5s;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
