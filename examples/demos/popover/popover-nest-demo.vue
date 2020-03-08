<template functional>
  <div class="demo-block">
    <x-popover>
      <table border cellspacing="0">
        <tr>
          <th>日期</th>
          <th>姓名</th>
          <th>地址</th>
        </tr>
        <tr v-for="(trData, i) in gridData || [{
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
      }]" :key="'tr_' + i">
          <td>{{ trData.date }}</td>
          <td>{{ trData.name }}</td>
          <td>{{ trData.address }}</td>
        </tr>
      </table>
      <input type="text" slot="reference" />
    </x-popover>
  </div>
</template>

<script>
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

</script>
