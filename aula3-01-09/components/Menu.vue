<template>
  <header class="header">
    <h1>Logo</h1>

    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item">{{ item }}</li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  data() {
    return {
      menuItems: [
        'Início',
        'Produtos',
        'Serviços',
        'Contato'
      ]
    }
  }
}
</script>

<style scoped>
  * {
    font-family: sans-serif;
  }

  .header {
    background-color: #F1F1F1;
    width: 100%;
  }

  .header ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  .header li {
    cursor: pointer;
    padding: 5px;
  }
</style>
