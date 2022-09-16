<template>
  <header>
    <div class="title">Games</div>
    <div class="populares">
      <select v-model="filtro" name="select">
        <option value="Selecione" disabled>Filtros</option>
        <option value="Mais populares">Mais populares</option>
        <option value="Preço">Preço</option>
        <option value="A-Z">A - Z</option>
      </select>
    </div>
  </header>
</template>

<script>
import { watch, ref, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const filtro = ref('Selecione')
    const store = useStore()

    watch(
      () => filtro.value,
      () => {
        store.dispatch('produtos/setFiltro', {
          filtro: filtro.value,
        })
      }
    )

    return {
      filtro,
    }
  },
}
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 48px;
  font-weight: 600;
  color: #363636;
}

select {
  background-color: transparent;
  border: 1px solid #e1e1e1;
  outline: none;
  width: 262px;
  height: 40px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px;
  padding-left: 18px;
  border-radius: 4px;
  color: #423b3b;
}

select option {
  -webkit-box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.27);
  border: none;
  cursor: pointer !important;
}
</style>