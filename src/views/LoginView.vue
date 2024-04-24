<template>
  <!-- Login Container -->
  <div class="flex flex-col w-96 h-96 bg-base-300 mx-auto my-auto">
    <h3 class="mx-auto mt-12 font-bold">Log in</h3>
    <!-- Username -->
    <div class="mx-auto mt-6">
      <div class="my-auto">
        <p class="text-sm">Username:</p>
        <input class="mb-1" type="text" v-model="userData.username" />
      </div>
    </div>
    <!-- password -->
    <div class="mx-auto">
      <div class="mt-2">
        <p class="text-sm">Password:</p>
        <input class="mb-1" type="password" v-model="userData.password" />
      </div>
    </div>
    <!-- Buttons -->
    <div>
      <div class="mx-auto space-x-7 ml-24 mt-2">
        <button class="ml-1 text-xs btn-link">Forgot password?</button>
        <button
          class="p-2 rounded bg-green-400 active:bg-green-200 text-xs font-semibold"
          @click="findUser()"
        >
          Login &triangleright;
        </button>
      </div>
    </div>
    <div class="mx-auto my-20">
      <p class="text-sm">
        Don't have a user?
        <router-link class="text-sm btn-link" to="/signup"
          >Click here!</router-link
        >
      </p>
    </div>
  </div>
  <div class="flex-col md:w-1/3 mx-auto">
    <h1 class="font-bold text-center mb-2">Login Details</h1>
    <div class="ml-4 mb-2 pr-2 md:flex md:justify-between">
      <span class="mb-2 text-sm">
        <p class="font-bold">User 1</p>
        <p>Username: johnd</p>
        <p>Password: m38rmF$</p>
      </span>
      <span class="text-sm">
        <p class="font-bold">User 2</p>
        <p>Username: mor_2314</p>
        <p>Password: 83r5^_</p>
      </span>
    </div>
    <!-- 3 & 4 -->
    <div class="ml-4 mb-2 pr-7 md:flex md:justify-between">
      <span class="text-sm">
        <p class="font-bold">User 3</p>
        <p>Username: kevinryan</p>
        <p>Password: kev02937</p>
      </span>
      <span class="text-sm">
        <p class="font-bold">User 4</p>
        <p>Username: donero</p>
        <p>Password: ewedon</p>
      </span>
    </div>
    <!-- 5 & 6 -->
    <div class="ml-4 mb-2 pr-4 md:flex md:justify-between">
      <span class="text-sm">
        <p class="font-bold">User 5</p>
        <p>Username: derek</p>
        <p>Password: jklg*_56</p>
      </span>
      <span class="text-sm">
        <p class="font-bold">User 6</p>
        <p>Username: david_r</p>
        <p>Password: 3478*#54</p>
      </span>
    </div>
    <!-- 7 & 8 -->
    <div class="ml-4 mb-2 md:flex md:justify-between">
      <span class="text-sm">
        <p class="font-bold">User 7</p>
        <p>Username: snyder</p>
        <p>Password: f238&@*$</p>
      </span>
      <span class="text-sm">
        <p class="font-bold">User 8</p>
        <p>Username: hopkins</p>
        <p>Password: William56$hj</p>
      </span>
    </div>
    <!-- 9 & 10 -->
    <div class="ml-4 mb-4 pr-5 md:flex md:justify-between">
      <span class="text-sm">
        <p class="font-bold">User 9</p>
        <p>Username: kate_h</p>
        <p>Password: kfejk@*_</p>
      </span>
      <span class="text-sm">
        <p class="font-bold">User 10</p>
        <p>Username: jimmie_k</p>
        <p>Password: klein*#%*</p>
      </span>
    </div>
  </div>
</template>

<script setup>
// Imports
import { ref, onMounted } from "vue";
import router from "@/router";

// Store Imports
import { useMyUserStore } from "@/stores/MyUserStore";

// Stores
const myUserStore = useMyUserStore();

const userData = ref({
  username: "",
  password: "",
});

const findUser = () => {
  let userAuth = false;
  myUserStore.getUsers.forEach((user) => {
    if (
      userData.value.username === user.username &&
      userData.value.password === user.password
    ) {
      myUserStore.userObject = user;
      userAuth = true;
      return;
    }
  });
  myUserStore.isValid = userAuth;
  if (userAuth) {
    router.push({ name: "home" });
  } else {
    alert("Invalid Username or Password.");
  }
};

onMounted(() => {
  myUserStore.getUsersFromApi();
});
</script>
