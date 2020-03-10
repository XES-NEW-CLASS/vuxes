// 生成 icon json，用于文档渲染用
const postcss = require('postcss')
const fs = require('fs')
const path = require('path')
const fontFile = fs.readFileSync(path.resolve(__dirname, '../packages/theme-default/src/icon.less'), 'utf8')
const nodes = postcss.parse(fontFile).nodes
const baseClassList = []
const tutorClassList = []

nodes.forEach((node) => {
  const selector = node.selector || ''
  const regBase = new RegExp(/\.x-icon-([^:]+):before/)
  const regTutor = new RegExp(/\.tutor-icon-([^:]+):before/)
  const baseArr = selector.match(regBase)
  const tutorArr = selector.match(regTutor)

  if (baseArr && baseArr[1]) {
    baseClassList.push(baseArr[1])
  }

  if (tutorArr && tutorArr[1]) {
    tutorClassList.push(tutorArr[1])
  }
})

// 希望按 css 文件顺序倒序排列
baseClassList.reverse()
tutorClassList.reverse()

fs.writeFile(path.resolve(__dirname, '../examples/icon.json'), JSON.stringify(baseClassList), () => { })
fs.writeFile(path.resolve(__dirname, '../examples/icon-tutor.json'), JSON.stringify(tutorClassList), () => { })
