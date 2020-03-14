const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')
const shell = require('shelljs')
const semver = require('semver')

const packageJsonPath = path.resolve(process.cwd(), 'package.json')
const packageJson = require(packageJsonPath)
const packageJsonVersion = packageJson.version

const { VERSION_OPT_MAP } = require('./config')
const verOptList = getVersionOptions(packageJsonVersion)

inquirer.prompt([{
  type: 'list',
  name: 'version',
  message: `选择将要升级的版本(当前版本 ${packageJsonVersion} )：`,
  default: 0,
  choices: verOptList
}, {
  type: 'input',
  name: 'message',
  message: '版本发布说明',
  default: ''
}]).then(answers => {
  console.log(answers)
  const version = answers.version
  const commitMessage = `"chore(package.json): update version to ${version}"`

  const cmd = `
    git checkout release &&
    git merge dev &&
    ${VERSION_OPT_MAP[version]} &&
    git add . &&
    git commit -m ${commitMessage} &&
    git push &&
    git push origin --tags &&
    git checkout master &&
    git merge release &&
    git push &&
    npm publish
  `

  shell.exec(cmd)

  console.log()
  console.log(chalk.green(`发布成功，当前版本为( ${version} ) `))
  console.log()
})

/**
 * 获取升级版本列表
 */
function getVersionOptions (version) {
  version = version.split('+')

  const currentVersion = version[0]
  const levels = ['patch', 'minor', 'major', 'prerelease-alpha', 'prerelease-beta', 'prerelease-rc']
  const opts = []

  levels.forEach(function (item) {
    let name = ''
    let value = ''
    if (item.startsWith('prerelease')) {
      const prerelease = item.split('-')[0]
      const subVer = item.split('-')[1]
      name = `${VERSION_OPT_MAP[subVer].text}(${semver.inc(currentVersion, prerelease, subVer)})`
      value = subVer
    } else {
      name = `${VERSION_OPT_MAP[item].text}(${semver.inc(currentVersion, item)})`
      value = item
    }
    opts.push({
      name,
      value
    })
  })

  return opts
}

process.on('unhandledRejection', function (a, b) {
  console.log(a, b)
})
