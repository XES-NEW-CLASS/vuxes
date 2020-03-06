# 项目结构

**项目的目录结构 :evergreen_tree:**

```bash
├─tests                               # 测试
├─public
|   ├─favicon.ico
|   └index.html
├─packages                            # 组件库目录
|    ├─index.js
|    ├─utils                          # 组件库工具方法
|    ├─theme-default                  # 组件库样式目录
|    |       ├─src
|    |       |  ├─button.less
|    |       |  ├─index.less          # 样式入口
|    |       |  ├─fonts               # 字体
|    |       |  ├─common              # 公共样式
|    |       |  |   ├─base.less       # 基础样式
|    |       |  |   ├─normalize.less  # 初始化重置样式
|    |       |  |   └─var.less        # 变量
|    |       ├─lib                    # 样式构建生成目录
|    ├─mixins                         # vue mixin
|    |   └bem.js                      # Bem mixin
|    ├─button                         # Button 组件
├─lib                                 # 组件库构建生成目录
|  ├─demo.html
|  ├─vuxes.common.js                  # 组件库入口（common）
|  ├─vuxes.umd.js                     # 组件库入口（umd）
|  ├─vuxes.umd.min.js
|  ├─theme-default                    # 组件库样式目录
├─examples                            # docs 项目目录
|    ├─App.vue
|    ├─main.js                        # 主入口
|    ├─nav.config.json                # docs 侧边栏数据文件
|    ├─router                         # 路由
|    ├─docs                           # docs 文档目录
|    ├─demos                          # docs 文档例子demo
|    ├─components                     # docs 项目布局组件
|    |     ├─demo-block.vue
|    |     ├─header.vue
|    |     └─side-nav.vue             # 侧边栏
|    ├─assets                         # docs 静态资源文件
├─docs                                # docs构建生成目录，用于发布
├─build                               # 项目工程化配置
|   ├─build-entry.js                  # 自动创建组件库入口
|   ├─build-lib.js                    # 组件库构建脚本（用于发布）
|   ├─cli.sh                          # 项目脚本集成 cli（运行命令）
|   ├─get-components.js               # 获取组件库文件结构脚本
|   ├─publish-docs.js                 # 发布文档脚本
|   ├─release.sh                      # 发布组件库脚本
|   └─utils.js                        # 构建命令辅助方法
├─.browserslistrc
├─.commitlintrc.js                    # git commit lint 配置（git提交规范）
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.npmignore
├─.postcssrc.js
├─LICENSE
├─README.md
├─babel.config.js
├─jest.config.js
├─package.json
├─vue.config.js
```
