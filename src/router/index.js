import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Home from '@/components/common/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:"Home",
      component: Home,
      children:[
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
        }
      ]
    }
  ]
})
