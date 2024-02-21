import { defineStore } from "pinia";
import axios from "axios";

export const useMyProductStore = defineStore("myProductStore", {
  state: () => ({
    myProducts: [],
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getProductsFromApi() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://fakestoreapi.com/products/", {
          headers: {
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        });
        console.log("response", response);

        this.myProducts = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    // async getIdOfProducts(Id) {
    //   const idOfProduct = Id;
    //   try {
    //     const idResponse = await axios.post(
    //       "https://fakestoreapi.com/products/",
    //       idOfProduct,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           // Add other headers as needed
    //         },
    //       }
    //     );
    //     console.log("response", idResponse);

    //     this.myProducts = idResponse.data.id;
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //   }
    // },
  },
});
