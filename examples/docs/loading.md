
# Loading 加载

用于初始化页面，初始化模块或者需要遮罩时使用

----

## 基础用法

<x-loading-directive></x-loading-directive>

:::demo
<br/>

默认使用方式为自定义指令`v-loading`，值为`Boolean`类型，会自动给当前指令所在dom添加加载效果。

----

```xml
<template>
  <div
    v-loading="loading"
    class="x-loading-demowrap"
  >
    loading组件渲染
  </div>
</template>

<script>
export default {
  name: 'x-loading-directive',
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="less" scoped>
.x-loading-demowrap {
  width: 100%;
  height: 200px;
  background: #efefef;
}
</style>

```

:::

## 可配置参数

<x-loading-directive-param></x-loading-directive-param>

::: demo
<br/>

自定义指令`v-loading`可以使用`body`指令修饰符来添加遮罩到全局body上，也可以使用`lock`指令修饰符来禁止滚动。当然除了指令修饰符，其它更改loading展现形式的方式为添加属性方式。目前支持的属性有：

> * `x-loading-text`，加载文案
> * `x-loading-icon`，加载icon（仅支持class方式的icon）
> * `x-loading-theme`，主题，默认为`light`，也可以为`dark`
> * `x-loading-addClass`，给loading组件添加样式，方便控制

----

```xml
<template>
  <div
    v-loading.lock="loading"
    x-loading-text="加载中..."
    x-loading-icon="x-icon-refresh-right"
    x-loading-theme="dark"
    x-loading-addClass="loading-addclass"
    class="x-loading-demowrap"
  >
    loading组件课配置参数说明
  </div>
</template>

<script>
export default {
  name: 'x-loading-directive-param',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>

<style lang="less" scoped>
.x-loading-demowrap {
  width: 100%;
  height: 200px;
  background: #efefef;
}
</style>

```

:::
