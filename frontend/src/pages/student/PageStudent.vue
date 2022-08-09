<template>
  <div>
    <section>
      <SearchBar class="content-searchBar" />
      <button>Cadastrar Aluno</button>
    </section>
    <TableList />
  </div>
</template>

<script>
  import TableList from '@/components/TableList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  export default {
    name: 'PageStudent',
    components: {
      TableList,
      SearchBar
    },

    mounted() {
      this.$store.dispatch('getAllStudents');
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    justify-content: center;
  }

  button {
    align-self: center;
    width: 25vmin;
    height: 7.5vmin;
    padding: 8.2px;
    margin-left: 30px;
    font-weight: bold;
    color: white;
    background-color: #0B610B;
    border-radius: 5px;
  }
</style>