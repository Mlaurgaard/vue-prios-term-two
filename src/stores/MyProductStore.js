import { defineStore } from "pinia";
import axios from "axios";
import { useStorage } from "@vueuse/core";
import { useMyUserStore } from "@/stores/MyUserStore";

export const useMyProductStore = defineStore("myProductStore", {
  state: () => ({
    myProducts: [],
    productID: useStorage("product-id", null),
    isLoading: false,
    singleProduct: useStorage("singleProduct", {}),
    productArrayInCart: useStorage("array-products", []),
    purchasedProducts: useStorage("purchased-products", []),
  }),
  getters: {
    productid() {
      return this.productID;
    },
    arrayforproducts() {
      return this.productArrayInCart;
    },
    productbeforecart() {
      return this.singleProduct;
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
    // async putProductInCart() {
    //   this.isLoading = true;
    //   console.log("yoyo");
    //   try {
    //     const productInCart = await axios.post(
    //       // `https://fakestoreapi.com/carts/${this.singleProduct}`,
    //       "https://fakestoreapi.com/carts",
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           // Add other headers as needed
    //         },
    //       }
    //     );
    //     console.log("what is this", productInCart);

    //     this.purchasedProducts = productInCart.data;
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     this.isLoading = false;
    //   }
    // },
    saveProductsToCart() {
      const pushMyProductToCart = this.productArrayInCart;

      const mySingleProduct = this.singleProduct;
      mySingleProduct.quantity = 1;

      pushMyProductToCart.push(mySingleProduct);

      console.log("this item is added to the array", pushMyProductToCart);
    },
    deleteitemFromCart(product) {
      const arrayInCart = this.productArrayInCart;
      const checkIfItemIsInCart = arrayInCart.find(
        (item) => item.id === product.id
      );
      if (checkIfItemIsInCart.quantity > 1) {
        checkIfItemIsInCart.quantity--;
      } else {
        const index = arrayInCart.indexOf(checkIfItemIsInCart);
        arrayInCart.splice(index, 1);
      }
      console.log("product", checkIfItemIsInCart);
    },
    increaseAmountOfItemsInCart(product) {
      const existingProductinCart = this.productArrayInCart.find(
        (item) => item.id === product.id
      );
      if (existingProductinCart) {
        existingProductinCart.quantity =
          (existingProductinCart.quantity || 1) + 1;
        console.log("Quantity Increased", product.quantity);
      } else {
        product.quantity = 1;
        this.productArrayInCart.push(product);
        console.log("Adding item to cart");
      }
    },
    decreaseAmountOfItemsInCart(product) {
      const existingProductinCart = this.productArrayInCart.find(
        (item) => item.id === product.id
      );
      if (existingProductinCart.quantity > 1) {
        existingProductinCart.quantity--;
      } else {
        product.quantity = 1;
        console.log("Please press the delete button");
      }
    },
    sendProductToPurchaseHistory() {
      const myUserStore = useMyUserStore();
      const userId = myUserStore.userObject.id;
      const shoppingCartProducts = this.productArrayInCart;
      const purchasedArray = this.purchasedProducts;
    },
  },
});
