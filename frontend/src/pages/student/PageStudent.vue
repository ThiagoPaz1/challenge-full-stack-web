<template>
  <div>
    <TableList />
  </div>
</template>

<script>
  import TableList from '@/components/TableList.vue';

  export default {
    name: 'PageStudent',
    components: {
      TableList
    },

    mounted() {
      this.$store.dispatch('getAllStudents');
    }
  }
</script>