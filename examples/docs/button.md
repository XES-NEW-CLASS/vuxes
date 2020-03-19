# Button 按钮

----

通过 `x-button`标签来引用

## 基础按钮

使用 `type`、`plain`、`round`、`circle`、`disabled` 属性来定义 Button 的样式。

<x-button-basic-demo></x-button-basic-demo>

::: demo
```html
<x-row>
  <x-button>默认按钮</x-button>
  <x-button type="primary">主要按钮</x-button>
  <x-button type="success">成功按钮</x-button>
  <x-button type="info">信息按钮</x-button>
  <x-button type="warning">警告按钮</x-button>
  <x-button type="danger">危险按钮</x-button>
</x-row>
<x-row>
  <x-button plain>朴素按钮</x-button>
  <x-button type="primary" plain>主要按钮</x-button>
  <x-button type="success" plain>成功按钮</x-button>
  <x-button type="info" plain>信息按钮</x-button>
  <x-button type="warning" plain>警告按钮</x-button>
  <x-button type="danger" plain>危险按钮</x-button>
</x-row>
<x-row>
  <x-button round>圆角按钮</x-button>
  <x-button type="primary" round>主要按钮</x-button>
  <x-button type="success" round>成功按钮</x-button>
  <x-button type="info" round>信息按钮</x-button>
  <x-button type="warning" round>警告按钮</x-button>
  <x-button type="danger" round>危险按钮</x-button>
</x-row>
<x-row>
  <x-button icon="x-icon-search" circle></x-button>
  <x-button type="primary" icon="x-icon-edit" circle></x-button>
  <x-button type="success" icon="x-icon-check" circle></x-button>
  <x-button type="info" icon="x-icon-message" circle></x-button>
  <x-button type="warning" icon="x-icon-star-off" circle></x-button>
  <x-button type="danger" icon="x-icon-delete" circle></x-button>
</x-row>
<x-row>
  <x-button disabled>禁用按钮</x-button>
  <x-button type="primary" disabled>主要按钮</x-button>
  <x-button type="success" disabled>成功按钮</x-button>
  <x-button type="info" disabled>信息按钮</x-button>
  <x-button type="warning" disabled>警告按钮</x-button>
  <x-button type="danger" disabled>危险按钮</x-button>
</x-row>
<x-row>
  <x-button disabled plain>禁用按钮</x-button>
  <x-button type="primary" disabled plain>主要按钮</x-button>
  <x-button type="success" disabled plain>成功按钮</x-button>
  <x-button type="info" disabled plain>信息按钮</x-button>
  <x-button type="warning" disabled plain>警告按钮</x-button>
  <x-button type="danger" disabled plain>危险按钮</x-button>
</x-row>
```
:::

## 文字按钮

没有边框和背景色的按钮。

<x-button-text-demo></x-button-text-demo>

::: demo
```html
<x-button type="text">文字按钮</x-button>
<x-button type="text" disabled>文字按钮</x-button>
```
:::

## 图标按钮

<x-button-icon-demo></x-button-icon-demo>

::: demo
```html
<x-button type="primary" icon="tutor-icon-luxiang"></x-button>
<x-button type="warning" icon="tutor-icon-jinmai"></x-button>
<x-button type="success" icon="tutor-icon-dianzan1"></x-button>
<x-button type="danger" icon="x-icon-search">搜索</x-button>
<x-button type="info"><i class="x-icon-refresh-left"></i></x-button>
```
:::

## 按钮尺寸

Button 组件提供了 `mini`、`small`、`medium`、`large`，4种额外的尺寸

还可以通过设置 `long` 使按钮变成长按钮

<x-button-size-demo></x-button-size-demo>

:::demo
```html
<x-row>
  <x-button type="primary" size="large">大型按钮</x-button>
  <x-button>默认按钮</x-button>
  <x-button type="success" size="medium">中等按钮</x-button>
  <x-button type="warning" size="small">小型按钮</x-button>
  <x-button type="info" size="mini">超小按钮</x-button>
</x-row>
<x-row>
  <x-button type="danger" long>长按钮</x-button>
</x-row>
```
:::

## 加载状态

通过 `loading` 为 `true/false` 控制加载状态，目前只支持默认加载loading，后期版本会考虑自定义loading

<x-button-loading-demo></x-button-loading-demo>

:::demo
```html
<x-button type="primary" :loading="true">加载中</x-button>
```
:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

<x-button-group-demo></x-button-group-demo>

:::demo
```html
<x-row>
  <x-button-group>
    <x-button type="primary" icon="x-icon-arrow-left">上一页</x-button>
    <x-button type="primary">下一页<i class="x-icon-arrow-right x-icon--right"></i></x-button>
  </x-button-group>
  <x-button-group>
    <x-button type="success" icon="x-icon-edit"></x-button>
    <x-button type="warning" icon="x-icon-share"></x-button>
    <x-button type="danger" icon="x-icon-delete"></x-button>
  </x-button-group>
</x-row>
```
:::

## Attributes

| 参数      | 说明           | 类型    | 可选值                                             | 默认值 |
| --------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type      | 类型           | string  | primary / success / warning / danger / info / text | -      |
| size      | 尺寸           | string  | large / medium / small / mini                      | -      |
| plain     | 是否朴素按钮   | boolean | -                                                  | false  |
| round     | 是否圆角按钮   | boolean | -                                                  | false  |
| circle    | 是否圆形按钮   | boolean | -                                                  | false  |
| long      | 是否长按钮     | boolean | -                                                  | false  |
| loading   | 是否加载中状态 | boolean | -                                                  | false  |
| disabled  | 是否禁用状态   | boolean | -                                                  | false  |
| icon      | 图标类名       | string  | -                                                  | -      |
| autofocus | 是否默认聚焦   | boolean | -                                                  | false  |
