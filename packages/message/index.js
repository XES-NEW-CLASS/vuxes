import Vue from 'vue'
import Toast from './message.vue'

const instances = [] // 多个创建
const ToastConstructor = Vue.extend(Toast)

const Message = options => {
  if (Vue.prototype.$isServer) return
  options = options || {} // 默认是个对象
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 实例化message.vue
  const instance = new ToastConstructor({
    data: options
  }).$mount()
  // 添加到body中
  document.body.appendChild(instance.$el)
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
export default Message
