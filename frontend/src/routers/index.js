import Vue from "vue";
import VueRouter from "vue-router";
import PageStudent from '../pages/student/PageStudent';
import PageRegistrationStudent from '../pages/student/PageRegistrationStudent';

Vue.use(VueRouter);

const routes = [
  {
    path: '/students',
    name: 'pageStudent',
    component: PageStudent,
  },
  {
    path: '/registrationStudents',
    name: 'pageRegistrationStudent',
    component: PageRegistrationStudent,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;