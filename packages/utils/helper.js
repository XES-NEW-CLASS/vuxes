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
