/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import Popover from './popover'
import Message from './message'
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
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button,
  Popover
}
export default {
  install,
  version
}
