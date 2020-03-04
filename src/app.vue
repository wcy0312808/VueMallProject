<!--一个 字符串模板  作为Vue的实例和标识使用，模板将会替换挂载的元素，挂载元素的内容都将被忽略-->
<template>
  <div v-if="seen" class="hello" :title="msg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '杨玉安的第一个vue项目' + new Date().toLocaleString(),
        seen: true
      }
    }
  }
</script>

<style>

</style>
