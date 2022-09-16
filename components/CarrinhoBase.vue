<template>
  <section
    :class="{
      carrinhoProduto: $store.state.produtos.produtos.length != 0,
    }"
    class="carrinho"
  >
    <carrinho-vazio v-if="$store.state.produtos.produtos.length == 0" />
    <carrinho-produto v-else />
  </section>
</template>

<script>
import { onMounted, useStore } from '@nuxtjs/composition-api'
import CarrinhoProduto from './CarrinhoProduto.vue'
import CarrinhoVazio from './CarrinhoVazio.vue'

export default {
  components: { CarrinhoProduto, CarrinhoVazio },
  setup() {
    const store = useStore()

    const getCarrinhoSalvo = async () => {
      if (!sessionStorage.produtosSalvos) {
        return
      }
      const produtosSalvos = await JSON.parse(sessionStorage.produtosSalvos)

      if (produtosSalvos.length != 0) {
        await store.dispatch('produtos/adicionarProdutosSalvos', {
          produtos: produtosSalvos,
        })
      }
    }

    onMounted(getCarrinhoSalvo)
    return {}
  },
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

@media only screen and (max-width: 873px) {
  .carrinho {
    margin-right: 18px;
    position: fixed;
  }
}

@media only screen and (max-width: 675px) {
  .carrinho {
    position: inherit !important;
  }
}
</style>