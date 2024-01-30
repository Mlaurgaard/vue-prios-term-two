import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import AboutView from "../views/AboutView.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/src/views/ProductsView",
      name: "Products",
      component: ProductsView,
    },
    {
      path: "/src/views/AboutView",
      name: "About",
      component: AboutView,
    },
    {
      path: "/src/views/UserView",
      name: "User",
      component: UserView,
    },
  ],
});

export default router;
