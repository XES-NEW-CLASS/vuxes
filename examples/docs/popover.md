# Popover 组件

----

## 基础用法

方式一：
通过 `x-popover`标签来引用，有4种触发方式

<x-popover-base-demo></x-popover-base-demo>

::: demo

```html
<template>
  <div class="demo-block">
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="right"
      :appendToBody="false"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="click"
      placement="bottom-end"
    >
      <x-button slot="reference">click 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="focus"
      plcement="right"
    >
      <x-button slot="reference">focus 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="manual"
      placement="top-end"
      v-model="isShowManualPopper"
    >
      <x-button slot="reference" @click="changeManualStatus">manual 激活</x-button>
    </x-popover>
  </div>
</template>

export default {
  data () {
    return {
      isShowManualPopper: false
    }
  },
  methods: {
    changeManualStatus () {
      this.isShowManualPopper = !this.isShowManualPopper
    }
  }
}
```

:::

方式二：
通过styleWay设置popper的不同样式

<x-popover-style-demo></x-popover-style-demo>

::: demo

```html
<template>
  <div class="demo-block">
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="left"
      styleType="dark"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="right"
      styleType="light"
    >
      <x-button slot="reference">hover 激活</x-button>
    </x-popover>
  </div>
</template>
```

:::

方式三：
内嵌代码
<x-popover-nest-demo></x-popover-nest-demo>

::: demo

```html
<template>
  <div class="demo-block">
    <x-popover>
      <table border cellspacing="0">
        <tr>
          <th>日期</th>
          <th>姓名</th>
          <th>地址</th>
        </tr>
        <tr v-for="(trData, i) in gridData" :key="'tr_' + i">
          <td>{{ trData.date }}</td>
          <td>{{ trData.name }}</td>
          <td>{{ trData.address }}</td>
        </tr>
      </table>
      <input type="text" slot="reference" />
    </x-popover>
  </div>
</template>

export default {
  name: 'x-popover-nest-demo',
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}

```

:::

方式四：
通过指令v-popover指定popover元素

<x-popover-directive-demo></x-popover-directive-demo>

::: demo

```html
<template>
  <div class="demo-block">
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="top-start"
      ref="myPopover"
    ></x-popover>
    <x-button v-popover:myPopover>hover 激活</x-button>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="hover"
      placement="right"
      ref="myPopover2"
    ></x-popover>
    <x-button v-popover="'myPopover2'">hover 激活</x-button>
    <x-popover
      title="测试用"
      content="测试文案"
      trigger="click"
      placement="right"
      ref="myPopover3"
    ></x-popover>
    <x-button v-popover="myPopoverRef">click 激活</x-button>
  </div>
</template>

export default {
  name: 'x-popover-directive-demo',
  data () {
    return {
      myPopoverRef: null
    }
  },
  mounted () {
    this.myPopoverRef = this.$refs.myPopover3
  }
}

```

:::

## Attributes
| 参数 | 说明 | 类型   | 可选值                                           | 默认值  |
| ---- | ---- | ------ | ------------------------------------------------ | ------- |
| trigger | 触发方式 | String | click/focus/hover/manual | click
| styleType | popper的样式类型 | String | dark/light
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
