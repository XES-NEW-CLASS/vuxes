# Confirm 确认框

---

## 基础用法

方式一：

```js
this.$confirm({
  text: {
    title: '提示',
    msg: '确认关闭吗？',
    btn: {
      submit: '确定',
      cancel: '取消'
    }
  }
});
```

<x-confirm-demo></x-confirm-demo>

## Options

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| title | 提示标题 | String | -  | - |
| msg | 提示内容 | String | -  | - |
| submit | 确认按钮文案 | String | -  | - |
| cancel | 取消按钮文案 | String | -  | - |

