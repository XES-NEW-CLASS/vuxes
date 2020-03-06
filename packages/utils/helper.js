/**
 * 是否可枚举
 * @export
 * @param {*} value
 * @param {*} validList
 * @returns {Boolean}
 */
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * 字符串-连接符自动替换大写
 * @export
 * @param {*} str
 * @returns {str}
 */
export function camelize (str) {
  const camelizeRE = /-(\w)/g
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

/**
 * 判断是否定义
 * @export
 * @param {*} value
 * @returns {Boolean}
 */
export function isDef (value) {
  return value !== undefined && value !== null
}

/**
 * 生成随机id
 * @returns {number}
 */
export const generateId = function () {
  return Math.floor(Math.random() * 10000)
}

/**
 * 合并对象
 * @param target
 * @returns {*}
 */
export const merge = function (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {}
    for (const prop in source) {
      // eslint-disable-next-line
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}
