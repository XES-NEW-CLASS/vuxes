import Vue from 'vue'
import Router from 'vue-router'
import docRoutes from './doc'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/doc/index'
}, {
  name: 'doc',
  path: '/doc',
  redirect: '/doc/index',
  component: () => import('@/pages/doc'),
  children: docRoutes
}, {
  name: 'post',
  path: '/post',
  component: () => import('@/pages/post')
}]

export default new Router({
  routes: routes
})
