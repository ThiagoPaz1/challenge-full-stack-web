import Vue from "vue";
import VueRouter from "vue-router";
import PageStudent from '../pages/student/PageStudent';
import PageRegistrationStudent from '../pages/student/PageRegistrationStudent';
import PageEditStudent from '../pages/student/PageEditStudent';

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
  },
  {
    path: '/editStudents',
    name: 'pageEditStudent',
    component: PageEditStudent,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;