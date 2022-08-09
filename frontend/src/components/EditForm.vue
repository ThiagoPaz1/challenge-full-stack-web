<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="save"
    >
      Salvar
    </v-btn>
    <router-link to="/students">
      <v-btn
        color="error"
        class="mr-4"
      >
        Cancelar
      </v-btn>
    </router-link>  
  </v-form>
</template>

<script>
  import { editStudentdApi } from '@/services/index';

  export default {
    name: 'RegistrationForm',
    data() {
     const { item } = this.$route.params;
     return {
      valid: true,
      name: item.name,
      nameRules: [
        v => v.length >= 3 || 'Nome precisa ter no mínimo 3 caracteres',
      ],
      email: item.email,
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'Insira um e-mail valido',
      ],
    }
  },

    methods: {
      async save() {
        const {id} = this.$route.params.item;
        const { name, email } = this;

        const newStudent = { 
          name: name,
          email: email,
        }
        
        try {
          await editStudentdApi(id, newStudent); 
          
          alert('Informações editadas com sucesso');
          
          this.name = '';
          this.email = '';
        } catch (error) {
          alert(error.response.data);
        }
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>