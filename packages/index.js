/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import ButtonGroup from './button-group'
import Message from './message'
import MessageTest from './message-test'
import Popover from './popover'
import Tooltip from './tooltip'
const version = '0.0.1'
const components = [
  Button,
  ButtonGroup,
  Popover,
  Tooltip
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)

    Vue.prototype.$message = Message
    Vue.prototype.$messageTest = MessageTest
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  Button,
  ButtonGroup,
  Message,
  MessageTest,
  Popover,
  Tooltip
}
export default {
  install,
  version
}
