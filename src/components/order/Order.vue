<template>
  <div class="order">
    <good-list></good-list>
    <cart></cart>
  </div>
</template>

<script>
  import GoodList from '@/components/order/GoodList.vue';
  import Cart from '@/components/order/Cart.vue';

  export default {
    components: {
      GoodList,
      Cart,
    }
  }
</script>

<style scoped lang="less">

</style>
