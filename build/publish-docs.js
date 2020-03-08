#!/usr/bin/env node

/* 发布文档到本仓库的gh-pages分支 */
const execSync = require('child_process').execSync
const ghpages = require('gh-pages')
const VERSION = require('../package.json').version
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')

execSync('npm run build:docs')
ghpages.publish('docs', {
  message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
})
