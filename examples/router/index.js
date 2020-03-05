import Vue from 'vue'
import Router from 'vue-router'
import navConf from '@/nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header])
})

const addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.name === 'index') {
        route.component = r =>
          require.ensure([], () => r(require('../docs/introduce.md')))
      } else {
        route.component = r =>
          require.ensure([], () => r(require(`../docs/${route.name}.md`)))
      }
    }
  })
}
addComponent(routes)

const availableRoutes = routes.filter(item => item.path)
export default new Router({
  routes: availableRoutes
})
