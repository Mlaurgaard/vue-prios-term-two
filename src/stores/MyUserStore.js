import { defineStore } from "pinia";
import axios from "axios";

export const useMyUserStore = defineStore("myUserStore", {
  state: () => ({
    myUsers: [],
    isLoggedIn: false,
    userStatus: false,
  }),
  getters: {},
  actions: {
    async getUsersFromApi() {
      this.isLoggedIn = false;
      this.userStatus = false;
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
        this.isLoggedIn = true;
        this.userStatus = true;
      }
    },
  },
});
