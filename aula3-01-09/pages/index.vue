<template>
  <div>
    <Menu />

    <p>Hello, {{ name }}!</p>

    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>


<style scoped>
  div {
    color: #222;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
</style>
