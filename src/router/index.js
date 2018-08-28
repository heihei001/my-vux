import Vue from 'vue'
import Router from 'vue-router'
// import Content from '@/components/layout/Content'
import HelloWorld from '@/components/layout/HelloWorld'
import Home from '@/components/layout/Home'
import AI from '@/components/layout/AI'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/ai',
    name: '',
    redirect: '/ai/assistant/time',
    component: AI,
    children: [{
      path: 'assistant',
      name: 'assistant',
      component: () => import('@/components/assistant/Index'),
      children: [{
        path: 'time',
        name: '',
        component: () => import('@/components/assistant/Time')
      }, {
        path: 'behavior',
        name: '',
        component: () => import('@/components/assistant/Behavior')
      }, {
        path: 'people',
        name: '',
        component: () => import('@/components/assistant/People')
      }]
    }, {
      path: 'message',
      name: 'message',
      component: () => import('@/components/message/Index')
    }, {
      path: 'customer',
      name: 'customer',
      component: () => import('@/components/customer/Index')
    }, {
      path: 'friends',
      name: 'friends',
      component: () => import('@/components/friends/Index')
    }, {
      path: 'my',
      name: 'my',
      component: () => import('@/components/my/Index')
    }]
  }]
})
