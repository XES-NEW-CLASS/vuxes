/**
 * 是否可枚举
 * @export
 * @param {*} value
 * @param {*} validList
 * @returns {Boolean}
 */
export const oneOf = (value, validList) => {
  return validList.includes(value)
}

/**
 * 字符串-连接符自动替换大写
 * @export
 * @param {*} str
 * @returns {str}
 */
export const camelize = (str) => {
  const camelizeRE = /-(\w)/g
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

/**
 * 判断是否定义
 * @export
 * @param {*} value
 * @returns {Boolean}
 */
export const isDef = (value) => {
  return value !== undefined && value !== null
}

/**
 * 生成随机id
 * @returns {number}
 */
export const generateId = () => {
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
