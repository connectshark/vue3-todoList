<template>
  <footer class="footer">
    <span class="material-icons">control_point</span>
  </footer>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/base.scss';
.footer{
  position: fixed;
  width: 100%;
  height: 150px;
  background-image: linear-gradient(to top, #fff 0%, transparent 100%);
  bottom: 0;
  left: 0;
}
</style>