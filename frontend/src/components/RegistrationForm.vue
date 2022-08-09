<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
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
      @click="validate"
    >
      Salvar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
    >
      Cancelar
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'RegistrationForm',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => v.length == 3 || 'Nome precisa ter no mínimo 3 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'Insira um e-mail valido',
      ],
      cpf: '',
      cpfRules: [
        v => !!v || 'CPF é obrigatório',
        v => v.length == 11 || 'CPF precisa ter 11 digitos',  
      ],
    }),

    methods: {
      validate() {
        this.$refs.form.validate()
      },
    },
  }
</script>