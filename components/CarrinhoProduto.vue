<template>
  <section class="base">
    <div>
      <span class="carrinho-title">Carrinho</span>
      <span class="carrinho-sub-title"
        >({{ this.$store.state.produtos.produtos.length }} itens)</span
      >
    </div>
    <div class="produtos-adicionados">
      <div
        class="produto"
        v-for="(produto, index) in this.$store.state.produtos.produtos"
        :key="index"
      >
        <section class="background-image">
          <img
            class="jogo-img"
            :src="require(`~/assets/${produto.image}`)"
            alt="jogo"
          />
        </section>
        <section class="produto-detalhes">
          <span class="produto-title">{{ produto.name }}</span>
          <span class="produto-preco"
            >R$ {{ produto.price.toString().replace('.', ',') }}</span
          >
        </section>

        <section class="produto-remover" @click="removerProduto(produto.id)">
          <span class="produto-remover-button">x</span>
        </section>
      </div>
    </div>

    <div class="produtos-valores">
      <div class="produtos-valores-tipos">
        <span class="label">subtotal</span>
        <span class="valor">{{
          subTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }}</span>
      </div>
      <div class="produtos-valores-tipos">
        <span class="label">frete</span>
        <span class="valor">
          {{
            frete.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }}</span
        >
      </div>
      <div class="produtos-valores-tipos">
        <span class="label">total</span>
        <span class="valor valor-final">{{
          total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()

    const frete = computed(() =>
      subTotal.value < 250 ? store.state.produtos.produtos.length * 10 : 0.0
    )
    const subTotal = computed(() =>
      store.state.produtos.produtos.reduce(
        (total, numero) => total + numero.price,
        0
      )
    )
    const total = computed(() => subTotal.value + frete.value)

    const removerProduto = async (id) => {
      const produtoEspecifico = store.state.produtos.produtos.indexOf(id)

      await store.dispatch('produtos/removerProduto', {
        produtoEspecifico,
      })
    }

    return {
      frete,
      total,
      subTotal,
      removerProduto,
    }
  },
}
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

.carrinho-sub-title {
  font-size: 14px;
  color: #7f7575;
}

.produtos-adicionados {
  display: flex;
  flex-direction: column;

  margin-top: 21px;
  min-height: 216px;
  max-height: 216px;
  padding-left: 20px;
  padding-right: 20px;
}

.jogo-img {
  height: 42px;
  width: 41px;
}

.background-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  min-width: 60px;
  height: 53px;
  background-color: #eeeeee;

  border-radius: 3px;
}

.produto {
  display: flex;
  margin-bottom: 19px;
  align-items: center;
}

.produto-detalhes {
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  min-width: 140px;
}

.produto-title {
  color: #7f7575;
  font-size: 14px;
}

.produto-preco {
  font-size: 14px;
  color: #423b3b;
  font-weight: bold;
}

.produto-remover {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.produto-remover-button {
  display: flex;
  justify-content: center;
  cursor: pointer;

  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  width: 15px;
  height: 15px;
  background-color: #54a3ff;
  border-radius: 50%;
}

.produtos-valores {
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  padding-left: 20px;
  padding-right: 20px;
}

.produtos-valores-tipos {
  display: flex;
  justify-content: space-between;
}

.label {
  color: #7f7575;
  font-size: 14px;
}

.produtos-valores-tipos {
  margin-bottom: 18px;
}

.valor {
  color: #423b3b;
  font-size: 16px;
  font-weight: bold;
}

.valor-final {
  font-size: 20px !important;
}
</style>