<template>
  <div>
    <input
      v-model="text"
      type="text"
      placeholder="Pesquise pelo nome de um aluno, exemplo: Thiago"
    >
    <button>Buscar</button>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        text: '',
      }
    }
  }
</script>

<style scoped>
  div {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
  }
  
  button {
    width: 15vmin;
    padding: 8.2px;
    font-weight: bold;
    color: white;
    background-color: #676767;
    border-radius: 0px 5px 5px 0px;
  }

  input {
    width: 100vmin;
    padding: 7.5px;
    border: 1px #848484 solid;
    border-radius: 5px 0px 0px 5px;
    border-right: none;
  }
</style>