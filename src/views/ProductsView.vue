<template>
  <!-- <pre>{{ myProducts }}</pre> -->
  <div v-if="MyProductStore.isLoading">
    <span>Loading Products...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-10"
    v-else-if="!MyProductStore.isLoading"
  >
    <div v-for="product in MyProductStore.myProducts" class="flex">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img :src="product.image" alt="Shoes" height="50px" width="50px" />
        </figure>
        <div class="card-body">
          <h2 class="card-title line-clamp-2">
            <router-link to="ProductCardsModal">{{
              product.title
            }}</router-link>
          </h2>
          <p class="line-clamp-2">{{ product.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
imports
*/
import { ref, onMounted } from "vue";

// store imports
import { useMyProductStore } from "@/stores/MyProductStore";

// stores
const MyProductStore = useMyProductStore();

// modal
const showContentModal = ref(false);

// async getProductsFromApi() {
//   isLoading.value = true;
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products/", {
//       headers: {
//         "Content-Type": "application/json",
//         // Add other headers as needed
//       },
//     });
//     console.log("response", response);
//     myProducts.value = response;
//     this.products =

//   } catch (error) {
//     console.error(error);
//   }
//   finally{
//    this.isLoading = false;
//   }
// };

onMounted(() => {
  // getProductsFromApi();
  MyProductStore.getProductsFromApi();
});

const clickedProduct = (product) => {
  console.log(product);
};
</script>
