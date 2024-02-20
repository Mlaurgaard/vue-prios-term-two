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
              <!-- Logged out -->
              <!-- login -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
                v-if="myUserStore.isValid == false"
              >
                <router-link to="/login">
                  <p class="p-1 px-1 text-sm font-bolder">Login</p>
                </router-link>
              </button>
              <!-- sign up -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
                v-if="myUserStore.isValid == false"
              >
                <router-link to="/signup">
                  <p class="p-1 px-1 text-sm font-bolder">Sign up</p>
                </router-link>
              </button>
              <!-- Logged In -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
                v-if="myUserStore.isValid == true"
                @click=""
              >
                <p class="p-1 px-1">
                  <router-link to="/user">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </router-link>
                </p>
              </button>
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
                v-if="myUserStore.isValid == true"
                @click="myUserStore.logoutUser()"
              >
                <p class="p-1 px-1 text-sm font-bolder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                </p>
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
import { ref, defineAsyncComponent, computed, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
// store imports
import { useMyUserStore } from "@/stores/MyUserStore";

// stores
const myUserStore = useMyUserStore();

const Footer = defineAsyncComponent(() =>
  import("@/components/layout/Footer.vue")
);

//refs
const drawerCheckbox = ref(null);

// handle click on navbar mobile
const handleClick = () => {
  drawerCheckbox.value.checked = !drawerCheckbox.value.checked;
};

const checkIfLoggedIn = ref("");

const isUserLoggedIn = () => {
  const userStatus = localStorage.getItem("isLoggedIn");
  if (!userStatus) {
    localStorage.setItem("isLoggedIn", false);
    const userStatus = localStorage.getItem("isLoggedIn");
    checkIfLoggedIn.value = userStatus;
  }

  checkIfLoggedIn.value = userStatus;
};

onMounted(() => {
  isUserLoggedIn();
});
</script>

<style scoped>
.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: 0px !important;
}
</style>
