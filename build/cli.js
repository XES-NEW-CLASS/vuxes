const inquirer = require('inquirer')
const shell = require('shelljs')

const { SCRIPT_OPT_MAP } = require('./config')

inquirer.prompt([{
  type: 'list',
  name: 'option',
  message: '【请选择要执行的脚本】',
  default: 0,
  choices: [{
    name: '初始化项目(第一次启动项目时执行)',
    value: 'init'
  }, {
    name: '构建组件（启动项目前必须执行，保证全局安装gulp）',
    value: 'build_lib'
  }, {
    name: '发布组件',
    value: 'publish_lib'
  }, {
    name: '构建文档',
    value: 'build_docs'
  }, {
    name: '发布文档',
    value: 'publish_docs'
  }, {
    name: '启动项目',
    value: 'dev'
  }]
}]).then(answers => {
  console.log(answers)
  shell.exec(SCRIPT_OPT_MAP[answers.option])
})

process.on('unhandledRejection', function (a, b) {
  console.log(a, b)
})
