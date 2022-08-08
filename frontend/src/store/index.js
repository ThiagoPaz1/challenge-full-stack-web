import Vue from 'vue';
import Vuex from 'vuex';
import { getAllStudentsApi } from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
  },
  mutations: {
    addStudent(state, newValue) {
      state.students.push(newValue);
    },
  },
  actions: {
    async getAllStudents({ commit }) {
      const dataApi = await getAllStudentsApi(); 

      for (let i in dataApi) {
        commit('addStudent', dataApi[i]);
      }
    }
  }
});