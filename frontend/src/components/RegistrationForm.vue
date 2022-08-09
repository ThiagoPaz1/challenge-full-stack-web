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

  <v-text-field
      placeholder="Digite sem os ' . ' e ' - ', ex: 00011122233"
      v-model="cpf"
      :rules="cpfRules"
      label="CPF"
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
        color="primary"
        class="mr-4"
      >
        Voltar
      </v-btn>
    </router-link>  
  </v-form>
</template>

<script>
  import { newStudentdApi } from '@/services/index';

  export default {
    name: 'RegistrationForm',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => v.length >= 3 || 'Nome precisa ter no mínimo 3 caracteres',
      ],
      email: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'Insira um e-mail valido',
      ],
      cpf: '',
      cpfRules: [
        v => v.length == 11 || 'CPF precisa ter 11 digitos',  
      ],
    }),

    methods: {
      async save() {
        const {name, email, cpf} = this
        const newStudent = { 
          name: name,
          email: email,
          cpf: cpf  
        }
        
        try {
          await newStudentdApi(newStudent); 
          
          alert('Novo aluno salvo com sucesso');
          
          this.name = '';
          this.email = '';
          this.cpf = '';
        } catch (error) {
          alert(error.response.data);
        }
      }
    },
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>