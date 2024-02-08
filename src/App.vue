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
        <!-- NAVBAR -->
        <div class="navbar shadow-md bg-base-100 h-[64px] z-10">
          <!-- Burger Icon -->
          <div class="flex-none lg:hidden">
            <label
              for="my-drawer-3"
              class="rounded btn-ghost p-1 mr-2"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current mb-0.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <!-- Navbar Title -->
            <button class="py-2">
              <router-link to="/">
                <p class="font-mono">GeneralStore</p>
              </router-link>
            </button>
          </div>

          <!-- Navbar Buttons  -->
          <div class="lg:flex hidden justify-between w-full">
            <!-- Navbar Left -->
            <div class="w-auto">
              <!-- title / home -->
              <button class="p-2 mx-2">
                <router-link to="/">
                  <p class="font-mono">GeneralStore</p>
                </router-link>
              </button>
              <!-- products -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
              >
                <router-link to="/products">
                  <p class="p-1 px-2 text-sm font-bolder">Products</p>
                </router-link>
              </button>
              <!-- about -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
              >
                <router-link to="/about">
                  <p class="p-1 px-2 text-sm font-bolder">About</p>
                </router-link>
              </button>
            </div>
            <!-- Navbar Right -->
            <div class="rounded w-auto">
              <!-- login -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
              >
                <router-link to="/login">
                  <p class="p-1 px-1 text-sm font-bolder">Login</p>
                </router-link>
              </button>
              <!-- sign up -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
              >
                <router-link to="/signup">
                  <p class="p-1 px-1 text-sm font-bolder">Sign up</p>
                </router-link>
              </button>
            </div>
          </div>
        </div>
        <!-- NAVBAR END -->
        <!-- Page content here -->
        <RouterView />
        <!-- Footer -->
        <Footer />
      </div>
      <!-- SIDEBAR -->
      <div class="drawer-side z-50">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu py-4 w-80 min-h-full bg-base-300 font-bolder">
          <!-- Sidebar Title -->
          <button class="py-2">
            <router-link to="/">
              <p class="font-mono">GeneralStore</p>
            </router-link>
          </button>
          <!-- Sidebar buttons -->
          <li>
            <router-link class="my-1" to="/" @click="handleClick()"
              >Home
            </router-link>
            <router-link class="my-1" to="/products" @click="handleClick()"
              >Products
            </router-link>
            <router-link @click="handleClick()" class="my-1" to="/about"
              >About
            </router-link>
          </li>
          <li class="mb-0 mt-auto">
            <router-link class="my-1 mt-auto" to="/login" @click="handleClick()"
              >Login
            </router-link>
            <router-link class="my-1" to="/signup" @click="handleClick()"
              >Sign up
            </router-link>
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
