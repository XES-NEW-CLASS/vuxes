// 生成 icon json，用于文档渲染用
const postcss = require('postcss')
const fs = require('fs')
const path = require('path')
const fontFile = fs.readFileSync(path.resolve(__dirname, '../packages/theme-default/src/icon.less'), 'utf8')
const nodes = postcss.parse(fontFile).nodes
const classList = []

nodes.forEach((node) => {
  const selector = node.selector || ''
  const reg = new RegExp(/\.x-icon-([^:]+):before/)
  const arr = selector.match(reg)

  if (arr && arr[1]) {
    classList.push(arr[1])
  }
})

classList.reverse() // 希望按 css 文件顺序倒序排列

fs.writeFile(path.resolve(__dirname, '../examples/icon.json'), JSON.stringify(classList), () => { })
