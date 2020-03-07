# Git 规范

使用 Feature Branching 工作流

- 任何新的功能（feature）或 bug 修复全都新建一个 branch 来写；
  - 功能分支命名例子 `feature/button`
  - Bug修复分支命名例子`bugfix/button`
- branch 写完后，合并到主开发分支并删除。

项目主开发分支以 dev + 版本号方式命名，例如：`dev/v0.0.1`

项目发布分支以 release + 版本号方式命名，例如：`release/v0.0.1`

项目测试通过后，`release` 合并到 `master` 分支

## Git 分支命名参考

- `master`：主分支，与线上代码一致。
- `dev/版本号`：开发分支，相对稳定的版本，所有的- feature分支和bugfix分支都从该分支创建。其它分支为短期分支，其完成功能开发之后需要删除
- `feature/*`：特性（功能）分支，用于开发新的功能，不同的功能创建不同的功能分支，功能分支开发完成并自测通过之后，需要合并到 dev 分支，之后删除该分支。
- `bugfix/*`：bug修复分支，用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题后合并到 dev 分支后，删除该分支。
- `release/版本号`：发布分支，用于代码上线准备，该分支从dev分支创建，创建之后由测试同学发布到测试环境进行测试，测试过程中发现bug需要开发人员在该release分支上进行bug修复，所有bug修复完后，在上线之前，需要合并该release分支到master分支和dev分支。
- `hotfix/*`：紧急bug修复分支，该分支只有在紧急情况下使用，从master分支创建，用于紧急修复线上bug，修复完成后，需要合并该分支到master分支以便上线，同时需要再合并到dev分支。

## Git Commit Message格式

- `scope`: 一个可选的修改范围，用于标识此次提交主要涉及到代码中哪个模块。
- `type` 提交类型：
  - `feat`: 新特性，新功能，表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）
  - `fix`: 表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）
  - `docs`: 文档修改
  - `style`: 格式化, 缺失分号等; 不包括生产代码变动
  - `refactor`: 代码重构
  - `perf`: 性能优化
  - `test`: 添加缺失的测试, 重构测试, 不包括生产代码变动
  - `build`: 构建任务相关的修改（比如gulp、webpack、npm）
  - `ci`: 对CI配置文件和脚本的更改（比如：Travis，Circle，BrowserStack，SauceLabs）
  - `chore`: 其他修改（不会修改src或测试文件的更改）
  - `revert`: 回滚commit
- `subject` 提交描述
  - 对应内容是commit 目的的简短描述，一般不超过50个字符

`description`: 简明扼要描述本次提交的内容，首字母无需大写，结尾不需要使用 .。

`optional body`: 详细描述本次提交，比如此次变更的动机，如需换行，则使用 |。

`optional footer`: 描述与之关联的 issue 或 break change。

:::tip
注意：提交类型 `feat` 和 `fix` 慎用，因为最终会生成 `CHANGELOG` 版本日志，除非是明确开发了某个重要功能点或修复了某个bug。
:::
