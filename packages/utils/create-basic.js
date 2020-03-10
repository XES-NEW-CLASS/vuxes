/**
 * 创建一个带有自动配置的组件
 */
import bem from '../mixins/bem'
import { isDef, camelize } from './helper'
import config from './config'

// 组件自动挂载
function install (Vue) {
  const { name } = this
  Vue.component(name, this)
  Vue.component(camelize(`-${name}`), this)
}

function returnArray () {
  return []
}

// 统一处理props默认值
function defaultProps (props) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = {
        type: Array,
        default: returnArray
      }
    } else if (props[key] === Number) {
      props[key] = {
        type: Number,
        default: 0
      }
    }
  })
}

export default function (ctx) {
  ctx.name = config.prefix + ctx.name
  ctx.install = ctx.install || install
  ctx.mixins = ctx.mixins || []
  ctx.mixins.push(bem)
  ctx.methods = ctx.methods || {}
  ctx.methods.isDef = isDef
  ctx.props && defaultProps(ctx.props)
  return ctx
}
