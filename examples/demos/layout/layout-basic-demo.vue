<template>
  <div class="demo-block">
    <x-row>
      <x-col :span="24"><div class="grid-content bg-purple-dark"></div></x-col>
    </x-row>
    <x-row class="m-10">
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="8"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row class="m-10">
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
    </x-row>
  </div>
</template>

<script>
export default {
  name: 'x-layout-basic-demo'
}
</script>

<style>
</style>
