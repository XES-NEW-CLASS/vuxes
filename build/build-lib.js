/* 发布准备：构建入口文件、构建库、构建样式文件 */
const shell = require('shelljs')
const signale = require('signale')

const { Signale } = signale
const tasks = [
  'lint',
  'clean',
  'build:entry',
  'lib',
  'build:style'
]

tasks.forEach(task => {
  signale.start(task)

  const interactive = new Signale({ interactive: true })
  interactive.pending(task)
  shell.exec(`npm run ${task} -s`)
  interactive.success(task)
})
