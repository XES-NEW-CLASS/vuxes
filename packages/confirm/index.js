import Confirm from './confirm.vue'
import create from '~/utils/create-prototype'
import { isObject } from '~/utils/data-type'
const createVonfirm = options => {
  if (!isObject(options) || (isObject(options) && options.msg === '')) return
  // eslint-disable-next-line promise/param-names
  return new Promise((res, rej) => {
    const props = {
      text: options.text || {}
    }
    const confirm = create(Confirm, props)
    confirm.submit = function () {
      res()
      confirm.isShow = false
    }
    confirm.cancel = function () {
      // eslint-disable-next-line prefer-promise-reject-errors
      rej()
      confirm.isShow = false
    }
  })
}

export default createVonfirm
