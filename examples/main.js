import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import vuxes from '../packages/index'
import '../packages/theme-default/src/index.less'
// import vuxes from '../lib/index.common'
// import '../lib/theme-default/index.css'
import icon from './icon.json'
import iconTutor from './icon-tutor.json'

Vue.component('demo-block', demoBlock)
Vue.use(vuxes)

const Demos = []

function importDemos (r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}
importDemos(require.context('@/demos', true, /\.vue$/))

Demos.map(component => Vue.component(component.name, component))

Vue.prototype.$icon = icon // Icon 列表页用
Vue.prototype.$iconTutor = iconTutor // Icon 列表页用

Vue.config.productionTip = false

// Promise Catch不报错
window.addEventListener('unhandledrejection', event => event.preventDefault())

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
