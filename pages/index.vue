<template>
  <main>
    <section class="lateral">
      <cabecalho />
      <lista-games />
    </section>
    <section>
      <carrinho />
    </section>
  </main>
</template>

<script lang="ts">
import Cabecalho from '../components/Header.vue'
import ListaGames from '../components/ListaGames.vue'
import Carrinho from '../components/Carrinho.vue'
export default {
  components: { Cabecalho, ListaGames, Carrinho },
  name: 'IndexPage',
}
</script>

<style >
body {
  font-family: 'Open Sans', sans-serif !important;
  margin: 0;
}

main {
  margin-top: 42px;
  margin-left: 70px;
  display: flex;
}

.font {
  font-size: 30px;
}

.lateral {
  width: 70%;
}
</style>