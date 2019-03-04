import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from './main.js'
import info from './info.js'

Vue.use(Router)

export default new Router({
  routes: [].concat(main,info)
})
