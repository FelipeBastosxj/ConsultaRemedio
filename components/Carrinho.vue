<template>
  <section class="carrinho"></section>
</template>

<script>
export default {
  data() {
    return {
      dados: [],
    }
  },
  created() {
    this.getData()
  },

  methods: {
    async getData() {
      // eslint-disable-next-line no-console
      console.log('oi')
    },
  },
}
</script>

<style scoped>
.carrinho {
  width: 262px;
  height: 325px;
  border: 1px solid #e1e1e1;
  margin-top: 8px;
  margin-left: 31px;
  border-radius: 3px;
}
</style>