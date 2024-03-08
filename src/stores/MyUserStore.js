import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useStorage } from "@vueuse/core";

// const route = useRoute();

export const useMyUserStore = defineStore("myUserStore", {
  state: () => ({
    myUsers: useStorage("my-users", {}),
    userToken: useStorage("user-token", {}),
    isValid: useStorage("is-Valid", false),
    userObject: useStorage("user-object", {}),
    userStatus: false,
    isLoading: false,
  }),
  getters: {
    tokenOfUser() {
      return this.userToken;
    },
    getUsers() {
      return this.myUsers;
    },
    getMyUserObject() {
      return this.userObject;
    },
  },
  actions: {
    async getUsersFromApi() {
      try {
        const response = await axios.get("https://fakestoreapi.com/users", {
          headers: {
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        });
        console.log("response", response.data);

        this.myUsers = response.data;
      } catch (error) {
        console.error(error);
      } finally {
      }
    },
    logoutUser() {
      this.userObject = {};
      router.push({ name: "home" });
      this.isValid = false;
    },
  },
});
