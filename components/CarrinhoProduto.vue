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
    <div class="produtos-finalizar">
      <span>finalizar compra </span>
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
  overflow-y: scroll;
}

.produtos-adicionados::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.produtos-adicionados::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.produtos-adicionados::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 10px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.2) 75%,
    transparent 75%,
    transparent
  );
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

.produto:hover .produto-remover {
  display: flex;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translate3d(-20px, 0px, 0px);
  }

  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
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
  display: none;
  justify-content: center;
  min-width: 15px !important;
  min-height: 15px !important;
  max-height: 15px !important;
  border-radius: 50%;
  background-color: #54a3ff;
  animation: fade 0.5s;
  transition: 0.5s all;
}

.produto-remover-button {
  display: flex;
  justify-content: center;
  cursor: pointer;

  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  width: 8px;
  min-height: 17px !important;
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

.produtos-finalizar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  cursor: pointer;
}

.produtos-finalizar span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  width: 238px;
  height: 50px;
  background-color: #54a3ff;
  border-radius: 3px;
  transition: 0.5s all;
  font-size: 14px;
}

.produtos-finalizar span:hover {
  background-color: #54a4ff86;
}
</style>