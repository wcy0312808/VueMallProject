import Vue from 'vue'
import app from './app'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*它是一个单页面应用，内部只有一个Vue的实例*/
new Vue({
  /*代表的是挂载在id 为 APP的模块上*/
  el: '#app',
  router,
  /*render  是将template的所有样式注入到index中   也就是createElement方法*/
  render: h => h(app)
})
