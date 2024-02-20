import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useStorage } from "@vueuse/core";

// const route = useRoute();

export const useMyUserStore = defineStore("myUserStore", {
  state: () => ({
    myUsers: [],
    userStatus: false,
    isValid: useStorage("is-Valid", false),
  }),
  getters: {},
  actions: {
    async getUsersFromApi() {
      try {
        const response = await axios.get("https://fakestoreapi.com/users/1", {
          headers: {
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        });
        console.log("response", response);

        this.myUsers = response.data;
      } catch (error) {
        console.error(error);
      } finally {
      }
    },

    async userLogin(data) {
      const dataOfUsers = data;
      try {
        const userResponse = await axios.post(
          "https://fakestoreapi.com/auth/login",
          dataOfUsers,
          {
            headers: {
              "Content-Type": "application/json",
              // Add other headers as needed
            },
          }
        );
        console.log("okeoke", userResponse);
        // localStorage.setItem("isLoggedIn", true);
        this.isValid = true;
        localStorage.setItem("userData", data.username);
        router.push({ name: "home" });
      } catch (error) {
        console.error("error", error);
      } finally {
        console.log("congrats!");
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
