# Dialog 组件

----

## 基础用法

方式一：
通过 `x-dialog`标签来引用

<x-dialog-demo></x-dialog-demo>

::: demo

```html
<x-dialog></x-dialog>
```

:::

## Attributes
| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| isCancelText | 取消按钮文案 | String | - | 否 |
| isConfirmText | 确认按钮文案 | String | - | 是 |
| visible | 控制弹窗的状态，双向绑定 | Boolean | - | false |
| type | title位置，居中居左 | String | - | 'center' |
| title | title文案 | String | - | '提示' |

## Slot

| name | 说明 |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| content | 需要输入的文本内容及标签 |

## Events
| 事件名称 | 说明 |  回调参数 |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| open | 打开的回调 | - |
| close | 关闭按钮的回调 | - |
| cancel | 取消按钮的回调 | - |
| confirm | 确认按钮的回调 | - |

