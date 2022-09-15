<template>
  <section v-if="dados">
    <span v-for="(dado, index) in dados.data" :key="index" class="manipulador">
      <div>
        <img :src="require(`~/assets/${dado.image}`)" alt="jogo" />
      </div>
      <p class="game-title">
        {{ dado.name }}
      </p>
      <p class="game-value">
        {{
          dado.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }}
      </p>
      <p class="game-add" @click="adicionarProduto(dado)">
        adicionar ao carrinho
      </p>
    </span>
  </section>
</template>

<script lang="ts">
import { useContext, ref, onMounted, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const { $axios } = useContext()
    const dados = ref([])
    const store = useStore()

    const getDados = async () => {
      dados.value = await $axios.get('dados')
    }

    const adicionarProduto = async (produto: { id: string }) => {
      // @ts-ignore
      const resultado = store.state.produtos.produtos.find((e: { id: any }) => {
        return e.id === produto.id
      })

      if (!resultado) {
        await store.dispatch('produtos/adicionarProduto', {
          produto,
        })

        return
      }

      alert('Produto ja adicionado')
    }

    onMounted(getDados)

    return {
      getDados,
      dados,
      adicionarProduto,
    }
  },
}
</script>

<style scoped>
section {
  margin-top: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 31px;
}

section div {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 230px;
  background-color: #eeeeee;
  border-radius: 3px;
  align-items: center;
}

img {
  height: 180px;
  width: 180px;
}

p {
  margin: 0;
}

.game-title {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: #746a6a;
  font-size: 16px;
}
.game-value {
  margin-top: 2px;
  color: #3486e6;
  display: flex;
  justify-content: center;
  font-weight: bold;
}

.game-add {
  margin-top: 23px;
  color: #3486e6;
  font-weight: bold;
  display: none;
  justify-content: center;
  cursor: pointer;
  animation: slide 0.5s ease-in-out;
}

.manipulador:hover .game-add {
  display: flex;
}

.manipulador:hover .game-value {
  display: none;
}

.manipulador:hover .game-title {
  display: none;
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translate3d(0px, -30px, 0px);
  }

  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
}
</style>