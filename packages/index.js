/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import Message from './message'
import Popover from './popover'
const version = '0.0.1'
const components = [
  Button,
  Popover
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)

    Vue.prototype.$message = Message
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button,
  Message,
  Popover
}
export default {
  install,
  version
}
