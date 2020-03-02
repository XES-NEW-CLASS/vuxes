import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import vuxes from '../packages/index'
import '../lib/theme-default/index.css'

Vue.component('demo-block', demoBlock)
Vue.use(vuxes)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
