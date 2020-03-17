<template>
  <div class="icon-wrapper">
    <ul class="icon-list">
      <li v-for="name in $icon" :key="name">
        <span>
          <i :class="'x-icon-' + name"></i>
          <span class="icon-name">{{ 'x-icon-' + name }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'icon-demo'
}

</script>

<style lang="less">
.icon-wrapper {
  border: 1px solid #eee;
}
.icon-list {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 12px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
  list-style-type: none;

  &::after {
    display: inline-block;
    content: '';
    height: 100%;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', SimSun, sans-serif;
    color: #99a9bf;
    transition: color 0.15s linear;
  }

  i {
    display: block;
    font-size: 28px;
    margin-bottom: 15px;
    color: #606266;
    transition: color 0.15s linear;
  }

  .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
  }

  &:hover {
    span,
    i {
      color: rgb(92, 182, 255);
    }
  }
}
</style>
