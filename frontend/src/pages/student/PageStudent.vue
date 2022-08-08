<template>
  <div>
    <SearchBar />
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