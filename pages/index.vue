<template>
  <main>
    <section class="lateral">
      <cabecalho />
      <lista-games />
    </section>
    <section>
      <carrinho-base />
    </section>
  </main>
</template>

<script lang="ts">
import Cabecalho from '../components/Header.vue'
import ListaGames from '../components/ListaGames.vue'
import CarrinhoBase from '../components/CarrinhoBase.vue'
export default {
  name: 'IndexPage',
  components: { Cabecalho, ListaGames, CarrinhoBase },
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
  margin-bottom: 105px;
  display: flex;
}

.font {
  font-size: 30px;
}

.lateral {
  width: 70%;
}

@media only screen and (max-width: 873px) {
  .lateral {
    width: 50%;
  }
}

@media only screen and (max-width: 675px) {
  main {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }

  .lateral {
    width: 68%;
  }
}
</style>