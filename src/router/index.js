// ------------IMPORTS------------
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import AboutView from "@/views/AboutView.vue";
import UserView from "@/views/UserView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import ProductCardView from "@/views/ProductCardView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";

// ------------ROUTER------------
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/ProductCard",
      name: "ProductCard",
      component: ProductCardView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/cart",
      name: "cart",
      component: ShoppingCartView,
    },
  ],
});

export default router;
