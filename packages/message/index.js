import Toast from './message.vue'
import { isString, isNumber, isBoolean, isObject } from '~/utils/data-type'
import create from '~/utils/create-prototype'
const instances = []
let num = 1
const Message = (options) => {
  options = options || {}
  if (isString(options)) {
    options = {
      message: options
    }
  }
  const props = {
    message: isObject(options) ? options.message : options,
    type: isObject(options) ? options.type : '',
    duration: isNumber(options.duration) ? options.duration : 2000,
    isIconShow: isBoolean(options.isIconShow) ? options.isIconShow : true,
    fontColor: isString(options.fontColor) ? options.fontColor : '#fff',
    verticalOffset: isNumber(options.verticalOffset)
      ? options.verticalOffset
      : 20
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
    close(domId)
  }
  return message
}
const methods = Toast.data().msgType

methods.forEach(type => {
  Message[type] = options => {
    if (isString(options)) {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})
const close = domId => {
  let removeHeight
  instances.forEach((item, index) => {
    if (item.domId === domId) {
      removeHeight = item.verticalOffset
      instances.splice(index, 1)
    }
  })
  instances.forEach(item => {
    item.$el.style.top =
      parseInt(item.$el.style.top, 10) - removeHeight - 16 + 'px'
  })
}
Message.closeAll = () => {
  instances.forEach(item => {
    item.close()
  })
}

export default Message
