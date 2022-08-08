import Vue from "vue";
import VueRouter from "vue-router";
import PageInitial from '../pages/PageInitial';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'pageInitial',
    component: PageInitial,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;