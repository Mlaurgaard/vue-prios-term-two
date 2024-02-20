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
        <!-- show password -->
        <!-- <button class=""></button> -->
      </div>
    </div>
    <!-- Buttons -->
    <pre>{{ myUserStore.myUsers.username }}</pre>
    <pre>{{ myUserStore.myUsers }}</pre>

    <div>
      <div class="mx-auto space-x-7 ml-24 mt-2">
        <button class="ml-1 text-xs btn-link">Forgot password?</button>
        <button
          class="p-2 rounded bg-green-400 active:bg-green-200 text-xs font-semibold"
          @click="myUserStore.userLogin(userData)"
        >
          Login &triangleright;
        </button>
      </div>
      <router-link class="p-2 rounded bg-blue-100" to="/user">User</router-link>
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
/* Imports */
import { ref, onMounted } from "vue";

// store imports
import { useMyUserStore } from "@/stores/MyUserStore";

// stores
const myUserStore = useMyUserStore();

const username = ref(" ");

const password = ref(" ");
// email: "john@gmail.com", username: "johnd" password: "m38rmF$"
const userData = ref({
  username: "",
  password: "",
});

const findUser = () => {
  const users = myUserStore.myUsers;
  if (users.username == username.value && users.password == password.value) {
    myUserStore.loginUser();
  } else {
    alert("User not found.");
  }
};
</script>
