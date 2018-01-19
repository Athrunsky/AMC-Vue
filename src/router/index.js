import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import HomePage from '../views/homePage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Layout, redirect: '/homePage/index', hidden: true },
    {
      path: '/homePage',
      component: Layout,
      name: '首页',
      redirect: 'index',
      notSon: true,
      children: [
        { path: 'index', component: HomePage, name: '首页' }
      ]
    }
  ]
})
