import Vue from 'vue'
import VueRouter from 'vue-router'
import ButtonDemo from '@/components/button-demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/button-demo'
  },
  {
    path: '/button-demo',
    name: 'ButtonDemo',
    component: ButtonDemo
  }
]

const router = new VueRouter({
  routes
})

export default router
