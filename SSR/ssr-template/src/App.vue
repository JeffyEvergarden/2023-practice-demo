<template>
  <div id="app">
    <div class="demo">
      {{title}} 世界因你而美丽
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '你好，世界',
      desc: '凉宫春日的忧郁'
    }
  },
  method: {
    onClick() {
      console.log(this.title)
    }
  }
}
</script>

<style>
.demo {
  width: 300px;
  height: 300px;
  background: orange;
}
</style>