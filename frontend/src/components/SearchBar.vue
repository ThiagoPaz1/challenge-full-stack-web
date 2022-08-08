<template>
  <div>
    <input
      v-model="text"
      type="text"
      placeholder="Pesquise pelo nome de um aluno, exemplo: Thiago"
    >
    <button @click="findStundent">Buscar</button>
    <button class="btn-clear-filter" @click="clearFilter">Limpar filtro</button>
  </div>
</template>

<script>  
  export default {
    name: 'SearchBar',
    data() {
      return {
        text: '',
      }
    },

    methods: {
      findStundent() {
        const { students } = this.$store.state;
        const foundStudent = students.filter(i => (
          i.name.toLowerCase() === this.text.toLowerCase()
        ));

        if (!foundStudent.length) {
          return alert('Aluno não encontrado, verifique se digitou o nome corretamente');
        }
        
        this.$store.commit('addStudent', foundStudent);
      },

      clearFilter() {
        if (!this.text) {
          return alert('Não oque limpar nos filtros');
        }
        
        this.$store.dispatch('getAllStudents');
        this.text = '';
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

  .btn-clear-filter {
    margin-left: 10px;
    width: 20vmin;
    background-color:#045FB4;
    border-radius: 5px;
  }
</style>