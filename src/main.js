// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //引入vuex
import vfilters from './filters' //引入全局过滤器
//按需导入element
import './config/element';
//axios路由拦截
import './config/header'
//引入axios
import './newword/apiServer';
//导入全局变量
import './config/constant';
//引入公共css
import './css/base.css';
//px转rem
import './config/rem'
// 引入阿里矢量图
import  './assets/iconfont/iconfont.css';
Vue.use("vuex")
Vue.config.productionTip = false

for (let key in vfilters) {
  Vue.filter(key, vfilters[key]);
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
