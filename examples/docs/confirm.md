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

## Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| text | 类型 | object | {}     |
