import { defineStore } from "pinia";
import axios from "axios";
import { useStorage } from "@vueuse/core";
import { useMyUserStore } from "@/stores/MyUserStore";
import { ref } from "vue";
import router from "@/router";

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
    getsingleproduct() {
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
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    async getIdOfIdroducts() {
      this.isLoading = true;
      console.log("yoyo", this.productID);
      try {
        const idResponse = await axios.get(
          `https://fakestoreapi.com/products/${this.productID}`,
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
    // -----WORK IN PROGRESS----- (to replace getIdOfIdroducts)
    // sendSingleProductToState() {
    //   // all of the products
    //   const allOfTheProducts = this.myProducts;
    //   //

    //   console.log("this is what", filterProductsforID);
    // },
    // ------------temp line break ------------
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
    sendProductToPurchaseHistory(product) {
      // Get user from store, and get userID from current user.
      const myUserStore = useMyUserStore();
      const userId = myUserStore.userObject.id;

      // Get date of purchase (dd.mm.yy format)
      const dateOfPurchase = new Date();
      const day = dateOfPurchase.getDate().toString().padStart(2, "0");
      const month = (dateOfPurchase.getMonth() + 1).toString().padStart(2, "0");
      const formattedDate = `${day}.${month}.${
        dateOfPurchase.getFullYear() % 100
      }`;

      // Confirm or cancle Purchase
      const confirmOrCanclePurchase = confirm(
        "Please confirm if you want to purchase product(s)."
      );
      if (!confirmOrCanclePurchase) {
        // Do Nothing
        return;
      }

      // Add Random OrderID to purchase
      const shoppingCartProducts = this.productArrayInCart.map((product) => {
        const orderID = Math.floor(10000 + Math.random() * 90000);
        return {
          ...product,
          userId,
          purchaseDate: formattedDate,
          orderID,
        };
      });

      // Push shoppingcart array into new array for purchased products
      this.purchasedProducts.push(...shoppingCartProducts);

      // Empty shoppingcart after purchase
      this.productArrayInCart = [];

      // Alert for purchase complete and redirect to userpage or productspage
      const userDirectionAfterPurchase = confirm(
        "Thank you for your purchase! Do you wish to proceed to your profile[OK] or continue browsing[Cancel]?"
      );
      if (userDirectionAfterPurchase) {
        // Redirect to user page
        router.push({ name: "user" });
      } else {
        // Redirect to products
        router.push({ name: "products" });
      }
    },
    totalCostInCart() {
      let totalCost = 0;
      this.productArrayInCart.forEach((product) => {
        totalCost += (product.price || 0) * (product.quantity || 1);
      });
      return totalCost;
    },
    // sortPurchaseHistory() {
    //   const originalOrder = this.purchasedProducts;
    //   const sortedProducts = ref([]);
    //   const sortAscending = ref(true);
    // },
  },
});
