import Vue from 'vue'
import Toast from './message.vue'

const instances = [] // 多个创建
const ToastConstructor = Vue.extend(Toast)
let num = 0
const Message = options => {
  if (Vue.prototype.$isServer) return
  options = options || {} // 默认是个对象
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 生成唯一domId
  const domId = `x-message-${num++}`
  options.onClose = function () {
    Message.close(domId)
  }
  // 实例化message.vue
  const instance = new ToastConstructor({
    data: options
  }).$mount()
  // 添加到body中
  document.body.appendChild(instance.$el)
  instance.domId = domId
  // 计算定位高度
  let verticalOffset = options.verticalOffset || 20
  // 多个创建时的高度计算
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 20
  })
  instance.verticalOffset = verticalOffset
  // icon是否展示
  instance.isIconShow = options.isIconShow || false
  // 可见状态
  instance.visible = true
  // 添加新的数组中
  instances.push(instance)
  return instance
}

// icon类型列表
const MessageType = Toast.data().iconType
// Message函数中拓展 ["success", "error",'warning','info'] 方法
MessageType.forEach((type) => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    Message(options)
  }
})
// close事件
Message.close = (domId) => {
  // eslint-disable-next-line no-unused-vars
  instances.forEach((item, index) => {
    if (item.domId === domId) {
      item.$el.style.top = parseInt(item.$el.style.top, 10) - item.$el.offsetHeight - 20 + 'px'
    }
  })
}
// 修改判断公用方法
export default Message
