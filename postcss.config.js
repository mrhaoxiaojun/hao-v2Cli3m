// https://github.com/michael-ciniawsky/postcss-load-config
/**
* creat mrhaoxiaojun
* 配置此文档api： https://github.com/michael-ciniawsky/postcss-load-config
* vue-laoder说明：https://vue-loader.vuejs.org/zh-cn/postcss.html
*/
/**
 * 重要提示
 * vue-loader 从 11.0 版本开始支持通过 postcss-loader 自动加载同一个配置文件：
 * 名字可以是No1：postcss.config.js   No2：.postcssrc（本文件使用this）
 * 安装 postcss-loader 包
 * 使用配置文件允许你在由 postcss-loader 处理的普通CSS文件和 *.vue 文件中的 CSS 之间共享相同的配置，这是推荐的做法。
 * webpack.config.js加入
 * rules: [{
 *     test: /\.(css|scss)$/,
 *     loader:"style-loader!css-loader!postcss-loader!sass-loader"
 * }],
 */

/**
 * postcss 插件介绍
 * plugins支持数组，支持对象
 *
 * autoprefixer： 自动补写前缀
 * postcss-px2rem：https://www.npmjs.com/package/postcss-px2rem
 * postcss-pxtorem:https://www.npmjs.com/package/postcss-pxtorem
 * 二者都为解决px转化为rem而而生，前者做的相对来说比较单薄，后者配置项相对来说丰富些
*/
module.exports = {
  'plugins': {
    'autoprefixer': {},
    'postcss-pxtorem': {
      root_value: '37.5', // 基准值
      prop_white_list: [], // 对所有 px 值生效
      minPixelValue: 2 // 忽略 1px 值
    }
  }
}
// 前端开发h5，px2rem新定义

// 1、要求，ui设计师同事出具750px的高保真设计图
// 2、375px 此为基准值, 与视觉设计稿 `宽度/2` 保持一致。
// 3、浏览器默认16px==1rem 我们根据基准值，设置根元素font-size=20px，换算改为1rem == 20px
// 4、以750/2的设计为标准，分别根据不同设备兼容750/2，640/2，720/2屏幕尺寸，以及动态更新根元素font-size单位换算
// 6、开发人员root_value = 750/20（基准值）
