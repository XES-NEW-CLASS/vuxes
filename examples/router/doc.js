import navConf from '@/nav.config.json'

let routes = []

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header])
})

const addComponent = router => {
  router.forEach(route => {
    if (route.children) {
      addComponent(route.children)
      routes = routes.concat(route.children)
    } else {
      if (route.name === 'index') {
        route.component = () => import('../docs/introduce.md')
      } else {
        route.component = () => import('../docs/' + route.name + '.md')
      }
    }
  })
}
addComponent(routes)

const availableRoutes = routes.filter(item => item.path)

export default availableRoutes
