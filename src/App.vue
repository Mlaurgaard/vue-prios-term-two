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
              <!-- shopping cart -->
              <button
                class="p-2 mx-1 rounded hover:bg-gray-200 active:bg-gray-300 font-bolder"
                v-if="myUserStore.isValid == true"
              >
                <p class="p-1 px-1">
                  <router-link to="/cart"
                    ><svg
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </router-link>
                </p>
              </button>
              <!-- userview -->
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
              <!-- logout -->
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
            <router-link class="my-1" to="/" @click="handleClick()">
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </router-link>
            <router-link class="my-1" to="/products" @click="handleClick()">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Products</router-link
            >
            <router-link @click="handleClick()" class="my-1" to="/about">
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
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
              About
            </router-link>
          </li>
          <!-- Before Login -->
          <li class="mb-0 mt-auto" v-if="myUserStore.isValid == false">
            <router-link class="my-1 mt-auto" to="/login" @click="handleClick()"
              >Login
            </router-link>
            <router-link class="my-1" to="/signup" @click="handleClick()"
              >Sign up
            </router-link>
          </li>
          <!-- After Login -->
          <li class="mb-0 mt-auto" v-if="myUserStore.isValid == true">
            <!-- cart -->
            <router-link class="my-1 mt-auto" to="cart" @click="handleClick()"
              ><svg
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Cart
            </router-link>
            <!-- UserView -->
            <router-link class="my-1 mt-auto" to="user" @click="handleClick()"
              ><svg
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
              User
            </router-link>
            <!-- Logout -->
            <router-link
              class="my-1"
              to="/"
              @click="myUserStore.logoutUser(), handleClick()"
              ><svg
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
              Log out</router-link
            >
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
