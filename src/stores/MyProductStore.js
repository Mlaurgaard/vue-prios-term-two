import { defineStore } from "pinia";
import axios from "axios";
import { useStorage } from "@vueuse/core";

export const useMyProductStore = defineStore("myProductStore", {
  state: () => ({
    myProducts: [],
    productID: useStorage("product-id", null),
    isLoading: false,
    singleProduct: useStorage("singleProduct", {}),
  }),
  getters: {
    productid() {
      return this.productID;
    },
  },
  actions: {
    async getProductsFromApi() {
      console.log("getProductsFromApi");
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
    async getIdOfIdroducts() {
      this.isLoading = true;
      console.log("yoyo", this.productid);
      try {
        const idResponse = await axios.get(
          `https://fakestoreapi.com/products/${this.productid}`,
          // idOfProduct,
          // `https://fakestoreapi.com/products/2`
          {
            headers: {
              "Content-Type": "application/json",
              // Add other headers as needed
            },
          }
        );
        console.log("response", idResponse);

        this.singleProduct = idResponse.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
