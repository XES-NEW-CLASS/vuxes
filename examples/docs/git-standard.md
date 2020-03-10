# Git 规范

使用 Feature Branching 工作流

- 任何新的功能（feature）或 bug 修复全都新建一个 branch 来写；
  - 功能分支命名例子 `feature/button`
  - Bug修复分支命名例子`bugfix/button`
- branch 写完后，合并到主开发分支并删除。

项目主开发分支以 dev + 版本号方式命名，例如：`dev/v0.0.1`

项目发布分支以 release + 版本号方式命名，例如：`release/v0.0.1`

项目测试通过后，`release` 合并到 `master` 分支

## 工作流程

- 开发组件库: 切出功能分支，例如 `feature/button`
- 合并开发分支: 功能完成后合并到主开发分支
- 组件库发布: 整个组件库功能完成时，从开发分支切出发布分支，并创建 tag 来标识这个版本，发布成功后合并到master，并删除所有 feature 分支及主开发分支
  ```bash
  # 当前分支 dev/v0.0.1
  git checkout -b release/v0.0.1
  git tag -a v0.0.1 -m 'Release version 0.0.1'
  # 当前分支 master
  git merge release/v0.0.1
  ```

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

## 组件库发布 Github Tag

当组件库完成时，我们可以创建一个tag来指向一个关键时期，比如版本号更新的时候可以建一个“v1.0”、“v2.0”之类的标签，这样在以后回顾的时候会比较方便。tag的使用很简单，主要操作有：

```bash
# 查看tag，列出所有tag，列出的tag是按字母排序的，和创建时间没关系。
git tag
# v0.1.0
# v0.1.1

# 显示tag信息
git show v0.1.0

# 创建tag
git tag v0.1.0

# 带信息的tag：-m后面带的就是注释信息
git tag -a v0.1.0 -m 'Release version 0.1.0'

# 我们在执行 git push 的时候，tag是不会上传到服务器的，比如现在的github，创建 tag 后 git push ，在github网页上是看不到tag 的，为了共享这些tag，你必须这样：
git push origin v0.1.0
# or
# 将所有tag 一次全部push到github上。
git push origin --tags

# 删除tag
# 删除本地tag
git tag -d v0.1.0

# 删除github远端的指定tag
git push origin :refs/tags/v0.1.0

# 创建一个基于指定tag的分支
git checkout -b dev/v0.1.0 v0.1.0

# 切换到指定tag
git checkout tag
```

::: tip
切换到tag历史记录会处在分离头指针状态，这个时候修改是很危险的，在切换回主线时如果没有合并，之前的修改提交基本都会丢失，如果需要修改可以尝试 `git checkout -b branch tag` 创建一个基于指定tag的分支，例如：`git checkout -b tset v0.1.0` 这个时候就会在分支上进行开发，之后可以切换到主线合并
:::

## Git 操作技巧

除了一些基本的 git 命令用法，这里列举几个工作中经常用到的命令

```bash
# merge 命令会造成 commit 历史分叉，如果不希望历史出现分叉，可以 rebase（在新位置重新提交）
# 一般用 rebase 合并多个commit， rebase 是站在需要被 rebase 的 commit 上进行操作，这点和 merge 是不同的
# merge使用
git checkout master
git merge branch1

# rebase使用
git rebase 目标基础点
```

### 刚提交了一个代码，发现有几个地方写错了

```bash
git commit --amend

# 如果集成了 commitizen，使用如下命令
git cz --amend
```

::: tip
"amend" 是「修正」的意思。在提交时，如果加上 --amend 参数，Git 不会在当前 commit 上增加 commit，而是会把当前 commit 里的内容和暂存区（stageing area）里的内容合并起来后创建一个新的 commit，用这个新的 commit 把当前 commit 替换掉。所以 commit --amend 做的事就是它的字面意思：对最新一条 commit 进行修正。
:::

### 如果写错的不是最新的提交，而是倒数第二个怎么办？

`commit --amend` 可以修复最新 commit 的错误，但如果是倒数第二个 commit，可以使用 `rebase -i`(交互式 rebase)，所谓「交互式 rebase」，就是在 `rebase` 的操作执行之前，你可以指定要 `rebase` 的 `commit` 链中的每一个 `commit` 是否需要进一步修改。

```bash
git rebase -i HEAD^^
# or
git rebase -i HEAD~2
```

:::tip
说明：在 Git 中，有两个「偏移符号」： ^ 和 ~

^ 的用法：在 commit 的后面加一个或多个 ^ 号，可以把 commit 往回偏移，偏移的数量是 ^ 的数量。

~ 的用法：在 commit 的后面加上 ~ 号和一个数，可以把 commit 往回偏移，偏移的数量是 ~ 号后面的数。
:::

```bash
# 修改写错的 commit，用 commit --amend 来把修正应用到当前最新的 commit：
git add .
git cz --amend

# 继续 rebase 过程，在修复完成之后，就可以用 rebase --continue 来继续 rebase 过程，把后面的 commit 直接应用上去
git rebase --continue
```

### 直接丢弃刚写的提交

```bash
git reset --hard HEAD^
```
