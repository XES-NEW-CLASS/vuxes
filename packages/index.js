/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import Loading from './loading' 
import { loadingDirective } from './loading'
import Message from './message'
import MessageTest from './message-test'
import Popover from './popover'
import Tooltip from './tooltip'
const version = '0.0.1'
const components = [
  Button,
  Loading,
  MessageTest,
  Popover,
  Tooltip
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
    Vue.prototype.$messageTest = MessageTest
  })
  Vue.use(loadingDirective)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button,
  Loading,
  Message,
  MessageTest,
  Popover,
  Tooltip
}
export default {
  install,
  version
}
