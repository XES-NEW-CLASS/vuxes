# Button 按钮
<!-- {.md} -->

---
<!-- {.md} -->

## 如何使用
<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`xes-button`标签来引用

::: demo

```html
<xes-button type="default" :size="16"></xes-button>
<xes-button type="primary" :size="16"></xes-button>
<xes-button type="success" :size="16"></xes-button>
```

:::



## Attributes
<!-- {.md} -->
| 参数   | 说明                                      | 类型    | 可选值         | 默认值 |
| ------ | ----------------------------------------- | ------- | -------------- | ------ |
| name   | 图标名称                                  | string  | -              | -      |
| color  | 图标颜色                                  | string  | -              | -      |
| size   | 图标大小                                  | number  | -              | -      |
| symbol | 是否多色（开启将以`svg`标签方式引入图标） | boolean | `true`,`false` | `true` |
