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
