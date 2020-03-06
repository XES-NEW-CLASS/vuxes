# Button 按钮

----

## 基础用法

方式一：
通过 `x-button`标签来引用

```html```

<x-button-demo></x-button-demo>

::: demo

```html
<x-button type="default">默认按钮</x-button>
<x-button type="primary">主要按钮</x-button>
<x-button type="success">成功按钮</x-button>
```

:::

## Attributes
| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| type | 类型 | string | default、primary、success、warning、danger、info | default |
