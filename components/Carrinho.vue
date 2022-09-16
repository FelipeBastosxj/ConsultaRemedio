<template>
  <section
    :class="{
      carrinhoProduto: this.$store.state.produtos.produtos.length != 0,
    }"
    class="carrinho"
  >
    <carrinho-vazio v-if="this.$store.state.produtos.produtos.length == 0" />
    <carrinho-produto v-else />
  </section>
</template>

<script>
import CarrinhoProduto from './CarrinhoProduto.vue'
import CarrinhoVazio from './CarrinhoVazio.vue'
export default {
  components: { CarrinhoProduto, CarrinhoVazio },
}
</script>

 

<style scoped>
.carrinho {
  display: flex;
  flex-direction: column;
  width: 262px;
  height: 325px;
  border: 1px solid #e1e1e1;
  margin-top: 8px;
  margin-left: 31px;
  border-radius: 4px;
}

.carrinhoProduto {
  min-height: 474px !important;
  max-height: 474px !important;
}
</style>