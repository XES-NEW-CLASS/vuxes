/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
export const wait = function (ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}

/**
 * 等待一个 Tick，代替 Vue.nextTick，返回 Promise
 */
export const waitImmediate = () => wait(0)
