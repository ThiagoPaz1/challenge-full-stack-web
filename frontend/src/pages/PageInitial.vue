<template>
  <v-app>
    <div class="initialArea-content">
      <NavigationBar />
      <v-main>
        <router-view />
      </v-main>
    </div>  
  </v-app>
</template>

<script>
  import NavigationBar from '@/components/NavigationBar.vue';

  export default {
    name: 'PageInitial',
    components: {
      NavigationBar,
    },
    
    computed: {
      showImg() {
        const { image } = this.$store.state;
        
        return image;
      }
    }
  }
</script>

<style scoped>
  .initialArea-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>