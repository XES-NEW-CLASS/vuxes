# Message 全局提示

----

## 基础用法

```js
this.$message('message 消息')
```

<x-message-base></x-message-base>
::: demo

```html
<template>
  <div class="demo-block">
    <span class="btn" @click="message">message-base</span>
  </div>
</template>
```
```js
export default {
  name: 'x-message-base',
  methods: {
    message () {
      this.$message('message-base')
    }
  }
}
```
:::
## 可参数配置


```js
this.$message.info({
  message: 'message',
})
```

<x-message-demo></x-message-demo>
::: demo

```html
<template>
  <div class="demo-block">
    <span class="btn" @click="message('info')">info-message</span>
    <span class="btn" @click="message('warning')">warning-message</span>
    <span class="btn" @click="message('error')">error-message</span>
    <span class="btn" @click="message('success')">success-message</span>
  </div>
</template>

```
```js
export default {
  name: 'x-message-demo',
  methods: {
    message (type) {
      this.$message[type]({
        message: `${type}`,
      })
    }
  }
}
```

:::
## 单独引用

```js
import { Message } from 'vuxes';
```
此时调用方法为 Message(options)。我们也为每个 type 定义了各自的方法，如 Message.success(options)。并且可以调用 Message.closeAll() 手动关闭所有实例。

::: demo
```js
Message.success({
  message:'message'
})
```
:::

## Options
| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| type | 消息类型 | String | default、success、warning、info | default |
| isIconShow | 是否展示icon | Boolean | -  | true |
| duration | 展示时长(秒) | Number | -  | 2000 |
| fontColor | 字体颜色 | String | -  | #fff |
| message | 消息内容 | String | -  | - |
| verticalOffset | top定位 | Number | -  | 20 |