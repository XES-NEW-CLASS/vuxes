// import Vue from 'vue'
import Toast from './message.vue'
import { isString, isNumber, isBoolean, isObject } from '~/utils/data-type'
import create from '~/utils/create-prototype'

const instances = []
let num = 1
const createMessage = (options, msgType) => {
  // 创建message实例
  options = options || {}
  if (options === '' || (isObject(options) && options.message === '')) return
  const props = {
    message: isObject(options) ? options.message : options,
    type: msgType || 'default',
    duration: isNumber(options.duration) ? options.duration : 2000,
    isIconShow: isBoolean(options.isIconShow) ? options.isIconShow : true,
    fontColor: isString(options.fontColor) ? options.fontColor : '#fff',
    verticalOffset: isNumber(options.verticalOffset) ? options.verticalOffset : 20
  }
  let verticalOffset = props.verticalOffset
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  props.verticalOffset = verticalOffset
  const domId = `x-message-${num++}`
  const message = create(Toast, props)
  message.domId = domId
  instances.push(message)
  message.onClose = () => {
    closeMsg(domId)
  }
  return message
}

// 扩展方法
const methods = Toast.data().msgType
const Message = {}
methods.forEach(type => {
  Message[type] = options => createMessage(options, type)
})

// close方法
const closeMsg = (domId) => {
  let removeHeight
  instances.forEach((item, index) => {
    if (item.domId === domId) {
      removeHeight = item.verticalOffset
      instances.splice(index, 1)
    }
  })
  // 重新设置top值
  instances.forEach(item => {
    item.$el.style.top =
        parseInt(item.$el.style.top, 10) - removeHeight - 16 + 'px'
  })
}
export default Message
