import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import HomePage from '../views/homePage/index.vue'
import apiSerach from '../views/apiSerach/index.vue'
import iMessage from '../views/iMessage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //{ path: '/', component: Layout, redirect: '/homePage/index', hidden: true },
    {
      path: '/',
      component: Layout,
      name: '首页',
      redirect: 'index',
      notSon: true,
      children: [
        { path: 'index', component: HomePage, name: '首页' },
        { path: 'apiSerach', component: apiSerach, name: 'API查询' },
        { path: 'iMessage', component: iMessage, name: '聊天室' }
      ]
    }
  ]
})
