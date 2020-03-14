exports.SCRIPT_OPT_MAP = {
// 项目初始化（第一次使用时调用/安装）
  init: 'npm run init',
  // 构建组件（启动项目前必须执行）
  build_lib: 'npm run build:lib',
  // 发布组件库到npm
  publish_lib: 'node ./build/release.js',
  // 构建文档
  build_docs: 'npm run build:docs',
  // 发布文档
  publish_docs: 'npm run publish:docs',
  // 启动项目
  dev: 'npm run dev'
}

exports.VERSION_OPT_MAP = {
  patch: {
    text: '修订版',
    script: 'npm run release -- -r patch'
  },
  minor: {
    text: '次版本',
    script: 'npm run release -- -r minor'
  },
  major: {
    text: '主版本',
    script: 'npm run release -- -r major'
  },
  alpha: {
    text: '内测版',
    script: 'npm run release -- -p alpha'
  },
  beta: {
    text: '公测版',
    script: 'npm run release -- -p beta'
  },
  rc: {
    text: '候选版',
    script: 'npm run release -- -p rc'
  }
}
