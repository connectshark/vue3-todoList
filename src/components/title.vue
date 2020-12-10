<template>
  <header class="header">
    <h1>待辦清單</h1>
    <p>{{month}}月 {{day}}日</p>
  </header>
</template>

<script>
export default {
  setup () {
    const time = new Date()
    const month = time.getMonth() + 1
    const day = time.getDate()
    return {
      month,
      day
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  text-align: center;
  h1{
    line-height: 4;
    font-size: 30px;
  }
  p{
    font-size: 20px;
    line-height: 1.5;
  }
}
</style>