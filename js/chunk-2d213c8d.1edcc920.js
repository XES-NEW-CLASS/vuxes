(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213c8d"],{adc7:function(s,n,t){"use strict";t.r(n);var e=function(){var s=this,n=s.$createElement;s._self._c;return s._m(0)},a=[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("section",[t("h1",[s._v("项目结构")]),t("p",[t("strong",[s._v("项目的目录结构")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("├─tests                               "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 测试")]),s._v("\n├─public\n|   ├─favicon.ico\n|   └index.html\n├─packages                            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库目录")]),s._v("\n|    ├─index.js\n|    ├─utils                          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库工具方法")]),s._v("\n|    ├─theme-default                  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库样式目录")]),s._v("\n|    |       ├─src\n|    |       |  ├─button.less\n|    |       |  ├─index.less          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 样式入口")]),s._v("\n|    |       |  ├─fonts               "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 字体")]),s._v("\n|    |       |  ├─common              "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 公共样式")]),s._v("\n|    |       |  |   ├─base.less       "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 基础样式")]),s._v("\n|    |       |  |   ├─normalize.less  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 初始化重置样式")]),s._v("\n|    |       |  |   └─var.less        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 变量")]),s._v("\n|    |       ├─lib                    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 样式构建生成目录")]),s._v("\n|    ├─mixins                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# vue mixin")]),s._v("\n|    |   └bem.js                      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Bem mixin")]),s._v("\n|    ├─button                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Button 组件")]),s._v("\n├─lib                                 "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库构建生成目录")]),s._v("\n|  ├─demo.html\n|  ├─vuxes.common.js                  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库入口（common）")]),s._v("\n|  ├─vuxes.umd.js                     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库入口（umd）")]),s._v("\n|  ├─vuxes.umd.min.js\n|  ├─theme-default                    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库样式目录")]),s._v("\n├─examples                            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs 项目目录")]),s._v("\n|    ├─App.vue\n|    ├─main.js                        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 主入口")]),s._v("\n|    ├─nav.config.json                "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs 侧边栏数据文件")]),s._v("\n|    ├─router                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 路由")]),s._v("\n|    ├─docs                           "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs 文档目录")]),s._v("\n|    ├─demos                          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs 文档例子demo")]),s._v("\n|    ├─components                     "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs 项目布局组件")]),s._v("\n|    |     ├─demo-block.vue\n|    |     ├─header.vue\n|    |     └─side-nav.vue             "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 侧边栏")]),s._v("\n|    ├─assets                         "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs 静态资源文件")]),s._v("\n├─docs                                "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# docs构建生成目录，用于发布")]),s._v("\n├─build                               "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 项目工程化配置")]),s._v("\n|   ├─build-entry.js                  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 自动创建组件库入口")]),s._v("\n|   ├─build-lib.js                    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 组件库构建脚本（用于发布）")]),s._v("\n|   ├─cli.sh                          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 项目脚本集成 cli（运行命令）")]),s._v("\n|   ├─get-components.js               "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 获取组件库文件结构脚本")]),s._v("\n|   ├─publish-docs.js                 "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 发布文档脚本")]),s._v("\n|   ├─release.sh                      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 发布组件库脚本")]),s._v("\n|   └─utils.js                        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 构建命令辅助方法")]),s._v("\n├─.browserslistrc\n├─.commitlintrc.js                    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# git commit lint 配置（git提交规范）")]),s._v("\n├─.editorconfig\n├─.eslintignore\n├─.eslintrc.js\n├─.gitignore\n├─.npmignore\n├─.postcssrc.js\n├─LICENSE\n├─README.md\n├─babel.config.js\n├─jest.config.js\n├─package.json\n├─vue.config.js\n")])])])}],c=t("2877"),l={},m=Object(c["a"])(l,e,a,!1,null,null,null);n["default"]=m.exports}}]);