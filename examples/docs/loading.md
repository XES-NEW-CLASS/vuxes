
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

## 自定义时机整页加载

<x-loading-server></x-loading-server>

::: demo
<br/>

自定义加载目的是为了处理加载时机问题，在需要初始化页面，加载异步事件等操作的时候可以使用该方式。挂载在`vue`对象上，挂载名为`$loading`。

----

```xml
<template>
  <div
    class="x-loading-demowrap"
  >
    <span @click="showLoading">
      <x-button type="success">点击显示loading</x-button>
    </span>
    <span @click="showLoadingOption">
      <x-button class="ml-10"
                type="success">点击显示自定义loading</x-button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'x-loading-server',
  methods: {
    showLoading () {
      const loadingFun = this.$loading()
      setTimeout(() => {
        loadingFun.close()
      }, 3000)
    },
    showLoadingOption () {
      const loadingFun = this.$loading({
        text: '加载中...',
        icon: 'x-icon-refresh-right',
        theme: 'dark',
        addClass: 'my-add',
        lock: true
      })
      setTimeout(() => {
        loadingFun.close()
      }, 3000)
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

## js方式操作加载

<br/>

js方式的加载可以使用在任何js浏览器环境中，可以脱离vue的束缚，但是和指令方式一样，该方式只支持全局加载，目前不提供局部加载的处理方式。

----

使用方式：

```js
import { xLoading } from 'vuxes'
```

在调用的时候：

```js
xLoading(options)
```

由于`xLoading`和`$loading`是一个对象。所以用法上也是一致的，可以使用`close`方法来关闭。下表列出了具体的参数说明。

## Options

| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| text | 加载文案 | string | -- | null |
| icon | 加载icon图标 | string | x-icon-refresh-right等 | tutor-icon-shuaxin |
| theme | loading色调 | string | `light`，`dark` | light |
| addClass | loading组件添加的class，方便控制 | string | -- | -- |
| lock | 加载时是否禁止滚动 | boolean | `true`，`false` | false |
