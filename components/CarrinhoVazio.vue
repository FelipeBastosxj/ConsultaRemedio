<template>
  <section class="base">
    <span class="carrinho-title">Carrinho</span>
    <div
      v-if="this.$store.state.produtos.produtos.length == 0"
      class="carrinho-vazio"
    >
      <img :src="require(`~/assets/cart-icon.svg`)" alt="jogo" />
      <span class="carrinho-vazio-aviso"
        >Até o momento, o seu carrinho está vazio</span
      >
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.base {
  padding-top: 20px;
}

.carrinho-title {
  font-size: 18px;
  font-weight: bold;

  padding-left: 25.5px;
  color: #363636;
}

.carrinho-vazio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 55px;
  align-items: center;
}

.carrinho-vazio img {
  width: 90px;
  height: 72px;
}

.carrinho-vazio-aviso {
  font-size: 14px;
  color: #746a6a;
  text-align: center;
  font-weight: normal;
  padding-top: 18px;
  padding-left: 31px;
  padding-right: 30px;
}
</style>