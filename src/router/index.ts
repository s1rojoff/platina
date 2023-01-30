import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SinglePage from "../views/SinglePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/maqola',
      name: 'Maqola',
      component: SinglePage
  },
  ],
});

export default router;