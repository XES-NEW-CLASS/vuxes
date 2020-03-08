/* 将组件写入/packages/index.js，生成入口文件 */
const fs = require('fs-extra')
const path = require('path')
const uppercamelize = require('uppercamelcase')
// 拿到packages目录下的所有含组件的文件名字
const Components = require('./get-components')()
const pkg = require('../package.json')

const version = process.env.VERSION || pkg.version
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`

// 创建入口
function buildPackagesEntry () {
  // 不挂载的组件列表
  const uninstallComponents = ['Message']

  const importList = Components.map(
    name => `import ${uppercamelize(name)} from './${name}'`
  )
  const exportList = Components.map(name => `${uppercamelize(name)}`)
  const installList = exportList.filter(
    name => !~uninstallComponents.indexOf(uppercamelize(name))
  )
  const content = `${tips}
${importList.join('\n')}
const version = '${version}'
const components = [
  ${installList.join(',\n  ')}
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)

    Vue.prototype.$messageTest = MessageTest
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  ${exportList.join(',\n  ')}
}
export default {
  install,
  version
}
`

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content)
}

buildPackagesEntry()
