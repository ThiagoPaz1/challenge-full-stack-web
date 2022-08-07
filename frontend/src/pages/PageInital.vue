<template>
  <v-app id="inspire">
    <NavigationBar />
  </v-app>
</template>

<script>
  import NavigationBar from '@/components/NavigationBar.vue'
  export default {
    components: { 
      NavigationBar 
    },
    name: "PageInitial",
}
</script>