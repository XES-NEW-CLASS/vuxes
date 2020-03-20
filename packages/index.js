/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import ButtonGroup from './button-group'
import Col from './col'
import Loading from './loading' 
import { loadingDirective, loadingServer as xLoading } from './loading'
import Message from './message'
import MessageTest from './message-test'
import Popover from './popover'
import Row from './row'
import Tooltip from './tooltip'
const version = '0.1.0'
const components = [
  Button,
  ButtonGroup,
  Col,
  Loading,
  Popover,
  Row,
  Tooltip
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)

    Vue.prototype.$message = Message
    Vue.prototype.$messageTest = MessageTest
  })
  Vue.use(loadingDirective)
  Vue.prototype.$loading = xLoading
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  xLoading,
  Button,
  ButtonGroup,
  Col,
  Loading,
  Message,
  MessageTest,
  Popover,
  Row,
  Tooltip
}
export default {
  install,
  version
}
