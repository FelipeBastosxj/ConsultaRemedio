<template>
  <section v-if="dados">
    <span
      v-for="(dado, index) in dados.data"
      v-show="loading"
      :key="index"
      class="manipulador"
    >
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
    <div v-show="!loading" class="loading-base">
      <loading />
      <loading />
      <loading />
      <loading />
      <loading />
      <loading />
      <loading />
      <loading />
      <loading />
    </div>
  </section>
</template>

<script lang="ts">
import {
  useContext,
  ref,
  onMounted,
  useStore,
  watch,
} from '@nuxtjs/composition-api'
import Loading from './Loading.vue'
export default {
  components: { Loading },
  setup() {
    const { $axios } = useContext()
    const dados = ref([])
    const store = useStore()
    const loading = ref(false)

    const getDados = async () => {
      dados.value = await $axios.get('dados')
      loading.value = true
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

    watch(
      // @ts-ignore
      () => store.state.produtos.filtro,
      () => {
        // @ts-ignore
        switch (store.state.produtos.filtro) {
          case 'A-Z': {
            // @ts-ignore
            dados.value.data.sort(
              (a: { name: String }, b: { name: String }) => {
                if (a.name < b.name) {
                  return -1
                } else {
                  return true
                }
              }
            )
            break
          }
          case 'Preço': {
            // @ts-ignore
            dados.value.data.sort(
              (a: { price: Number }, b: { price: Number }) => {
                if (a.price > b.price) {
                  return -1
                } else {
                  return true
                }
              }
            )
            break
          }
          case 'Mais populares': {
            // @ts-ignore
            dados.value.data.sort(
              (a: { score: Number }, b: { score: Number }) => {
                if (a.score > b.score) {
                  return -1
                } else {
                  return true
                }
              }
            )
            break
          }
        }
      }
    )

    onMounted(getDados)

    return {
      getDados,
      dados,
      adicionarProduto,
      loading,
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

.loading-base {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 31px;
  background-color: transparent;
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

@media only screen and (max-width: 1222px) {
  section {
    grid-template-columns: 1fr 1fr !important;
  }
  .loading-base {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 873px) {
  section {
    grid-template-columns: 1fr !important;
  }
  .loading-base {
    grid-template-columns: 1fr;
  }
}
</style>