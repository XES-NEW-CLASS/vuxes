# Message 全局提示

----

## 基础用法

方式一：

```js
this.$message.info('message 消息')
```

<x-message-demo></x-message-demo>

## Options
| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| type | 消息类型 | String | default、success、warning、info | default |
| isIconShow | 是否展示icon | Boolean | -  | true |
| duration | 展示时长(秒) | Number | -  | 2000 |
| fontColor | 字体颜色 | String | -  | #fff |
| message | 消息内容 | String | -  | - |
| verticalOffset | top定位 | Number | -  | 20 |