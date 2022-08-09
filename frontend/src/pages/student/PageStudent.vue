<template>
  <div>
    <section>
      <SearchBar class="content-searchBar" />
      <router-link to="/registrationStudents">
        <button>Cadastrar Aluno</button>
      </router-link>
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

  a {
    align-self: center;
    margin-left: 30px;
    width: 25vmin;
    height: 7.5vmin;
  }

  button {
    width: 25vmin;
    height: 7.5vmin;
    padding: 8.2px;
    font-weight: bold;
    color: white;
    background-color: #0B610B;
    border-radius: 5px;
  }
</style>