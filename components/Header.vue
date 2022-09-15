<template>
  <header>
    <div class="title">Games</div>
    <div class="populares">
      <select name="select">
        <option value="valor1" selected>Mais populares</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {}
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
</style>