<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Registro Acadêmico</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">CPF</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in allStudents" :key="index">
          <td>{{ item.ru }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ formatCpf(item.cpf) }}</td>
          <td>
            <v-icon small class="mr-2">mdi-pencil</v-icon>
            <v-icon small @click="deleteStudent(item.id)">mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { deleteStudentApi } from '@/services';
export default {
  name: "TableList",
  data() {
    return {
      headers: [
        { text: "Registro Acadêmico", value: "ru" },
        { text: "Nome", value: "name" },
        { text: "Email", value: "email" },
        { text: "CPF", value: "cpf" },
        { text: "Ações", value: "acoes" },
      ],
    };
  },

  methods: {
    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },
    async deleteStudent(id) {
      await deleteStudentApi(id);
      this.$store.dispatch('getAllStudents');
    }
  },

  computed: {
    allStudents() {
      const { students } = this.$store.state;
      return students;
    },
  }
}
</script>