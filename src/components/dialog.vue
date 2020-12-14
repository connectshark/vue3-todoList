<template>
  <teleport to='#modal'>
    <div class="dialog">
      <div class="content">
        <h2>{{title}}</h2>
        <div class="btn-group">
          <input type="button"
          v-for="(btn, index) in btns" :key="index"
          class="btn"
          :value="btn.text"
          @click="$emit('result-handler', btn.value)">
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['title'],
  emits: ['result-handler'],
  setup () {
    const btns = [{
      text: '是',
      value: true
    }, {
      text: '否',
      value: false
    }]
    return {
      btns
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/base.scss';
.dialog{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  .content{
    position: absolute;
    width: 80%;
    max-width: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: $sub;
  }
  h2{
    font-size: 24px;
    line-height: 2;
    text-align: center;
    color: $word;
  }
  .btn-group{
    text-align: center;
    padding: 20px 0;
    .btn{
      border: none;
      background-color: #fff;
      color: $word;
      border-radius: 5px;
      padding: 5px 15px;
      margin: 0 10px;
    }
  }
}
</style>