<template>
  <nav>
    <div class="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        class="drawer-toggle"
        ref="drawerCheckbox"
      />
      <div class="drawer-content flex flex-col min-h-screen">
        <!-- Navbar -->
        <div class="w-full navbar shadow-md bg-base-100 h-[64px] z-10">
          <div class="container md:px-4">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="pl-0 pl-8">
              <router-link to="/">
                <p class="font-mono">GeneralStore</p>
              </router-link>
            </div>
            <!-- Sidebar Menu on smaller screens -->
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal flex items-center font-bold">
                <!-- Navbar menu content here -->

                <li
                  class="rounded"
                  :class="{
                    'focus:bg-primary bg-primary': $route.path === '/products',
                  }"
                >
                  <router-link to="/products">Products</router-link>
                </li>
                <li
                  class="rounded p-3"
                  :class="{
                    'focus:bg-primary bg-secondary': $route.path === '/about',
                  }"
                >
                  <router-link to="/about">About</router-link>
                </li>
                <li
                  class="rounded"
                  :class="{
                    'focus:bg-primary bg-secondary': $route.path === '/signup',
                  }"
                >
                  <router-link to="/signup">Sign up</router-link>
                </li>
                <li
                  class="rounded"
                  :class="{
                    'focus:bg-primary bg-secondary': $route.path === '/login',
                  }"
                >
                  <router-link to="/login">Login</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Page content here -->
        <RouterView />
        <Footer />
      </div>
      <div class="drawer-side z-50">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu py-4 w-80 min-h-full bg-base-300 font-bold">
          <!-- Sidebar content here -->
          <li>
            <router-link to="/" @click="handleClick()">Home</router-link>
            <router-link to="/products" @click="handleClick()"
              >Products</router-link
            >
            <router-link to="/about" @click="handleClick()">About</router-link>
          </li>
          <li class="mb-0 mt-auto">
            <router-link class="mb-0 mt-auto" to="/login" @click="handleClick()"
              >Login</router-link
            >
            <router-link class="" to="/signup" @click="handleClick()"
              >Sign up</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, defineAsyncComponent, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";

const Footer = defineAsyncComponent(() =>
  import("@/components/layout/Footer.vue")
);

//refs
const drawerCheckbox = ref(null);

// handle click on navbar mobile
const handleClick = () => {
  drawerCheckbox.value.checked = !drawerCheckbox.value.checked;
};
// router const
const route = useRoute();

const shouldShowFooter = computed(() => {
  return !route.path.includes("/mooc/");
});
</script>

<style scoped>
.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: 0px !important;
}
</style>
