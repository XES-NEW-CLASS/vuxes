# Button 按钮

----

## 基础用法

方式一：
通过 `x-popover`标签来引用

<x-popover-base-demo></x-popover-base-demo>

::: demo

```html
待写
```

:::

方式二：
内嵌代码

<x-popover-nest-demo></x-popover-nest-demo>

::: demo

```html
待写
```

:::

## Attributes
| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| trigger | 触发方式 | String | click/focus/hover/manual | click
| title | 标题 | String | — | —
| content | 显示的内容，也可以通过 slot 传入 DOM | String | — | —
| width | 宽度 | String, Number | — | 最小宽度 150px
| placement | 出现位置 | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom
| disabled | Popover 是否可用 | Boolean | — | false
| value / v-model | 状态是否可见 | Boolean | — | false
| offset | 出现位置的偏移量 | Number | — | 0
| transition | 定义渐变动画 | String | — | fade-in-linear
| visible-arrow | 是否显示 Tooltip 箭头，更多参数可见Vue-popper | Boolean | — | true
| popper-options | popper.js 的参数 | Object | 参考 popper.js 文档 | { boundariesElement: 'body', gpuAcceleration: false }
| popper-class | 为 popper 添加类名 | String | — | —
| open-delay | 触发方式为 hover 时的显示延迟，单位为毫秒 | Number | — | —
| close-delay | 触发方式为 hover 时的隐藏延迟，单位为毫秒 | number | — | 200
| tabindex | Popover 组件的 tabindex | number | — | 0

### Slot
| 参数 | 说明 |
|--- | ---|
| — | Popover 内嵌 HTML 文本 |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| show | 显示时触发 | — |
| after-enter | 显示动画播放完毕后触发 | — |
| hide | 隐藏时触发 | — |
| after-leave | 隐藏动画播放完毕后触发 | — |
