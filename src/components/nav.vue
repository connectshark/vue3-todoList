<template>
  <nav id="nav">
    <ul class="nav-group">
      <router-link
        class="link"
        v-for="(route, index) in router"
        :key="index"
        :to="route.path">{{route.name}}</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  setup () {
    const router = [
      {
        path: '/home/all',
        name: '全部'
      },
      {
        path: '/home/undo',
        name: '未完成'
      },
      {
        path: '/home/complete',
        name: '已完成'
      },
    ]
    return {
      router
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/base.scss";
#nav{
  width: 100%;
  .nav-group{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .link{
      margin: 0 10px;
      color: #ccc;
      text-decoration: none;
      font-size: 24px;
      line-height: 2;
      border-bottom: 2px solid transparent;
      transition: border-bottom .5s, color .5s;
    }
    .link-active{
      color: $main;
      border-bottom: 2px solid $main;
    }
  }
}
</style>