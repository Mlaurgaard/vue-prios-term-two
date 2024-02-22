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
    async userLogin(userinfo) {
      this.isLoading = true;
      try {
        const userResponse = await axios.post(
          "https://fakestoreapi.com/auth/login",
          userinfo,
          {
            headers: {
              "Content-Type": "application/json",
              // Add other headers as needed
            },
          }
        );
        console.log("okeoke", userResponse);

        this.userToken = userResponse.data;
        console.log("token", this.userToken);
        this.isValid = true;
        router.push({ name: "home" });
      } catch (error) {
        console.error("error", error);
      } finally {
        console.log("congrats!");
        this.isLoading = false;
      }
    },
    logoutUser() {
      localStorage.clear();
      router.push({ name: "home" });
      console.log("yo");
      this.isValid = false;
    },
  },
});
