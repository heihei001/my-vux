// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router/index'
import App from './App'
import {
  AjaxPlugin,
  TransferDom,
  Tabbar,
  TabbarItem,
  ViewBox,
  Tab,
  TabItem
} from 'vux'
Vue.use(AjaxPlugin)
Vue.use(VueRouter)
Vue.directive('transfer-dom', TransferDom)

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('view-box', ViewBox)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
