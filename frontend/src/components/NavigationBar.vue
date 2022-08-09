<template>
  <aside>
    <v-navigation-drawer v-model="drawer" app>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list flat>
          <v-subheader>Módulos</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <router-link :to="item.router" class="routerLink">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Sistema de Gestão Acadêmico</v-toolbar-title>
    </v-app-bar>
  </aside>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      drawer: false,
      selectedItem: 1,
      items: [
        { 
          text: "Inicio",
          icon: "mdi-home",
          router: "/"
        },
        { 
          text: "Alunos",
          icon: "mdi-account",
          router: "/students"
        },
      ],
    };
  },
};
</script>

<style scoped>
.routerLink {
  display: flex;
  text-decoration: none;
  color: #272727;
}
</style>