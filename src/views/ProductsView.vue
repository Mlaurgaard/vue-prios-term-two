<template>
  <!-- <pre>{{ myProducts }}</pre> -->
  <div v-if="MyProductStore.isLoading">
    <span>Loading Products...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 mx-auto mt-2"
    v-else-if="!MyProductStore.isLoading"
  >
    <div v-for="product in MyProductStore.myProducts" class="flex">
      <div
        class="card w-96 bg-base-100 shadow-xl"
        @click="getProductData(product)"
      >
        <figure>
          <img :src="product.image" alt="Shoes" height="50px" width="50px" />
        </figure>
        <div class="card-body">
          <h2 class="card-title line-clamp-2">
            <router-link to="ProductCard">{{ product.title }}</router-link>
          </h2>
          <p class="line-clamp-2">{{ product.description }}</p>
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
import { objectEntries } from "@vueuse/core";

// stores
const MyProductStore = useMyProductStore();

const getProductData = (product) => {
  MyProductStore.productID = product.id;

  MyProductStore.getIdOfIdroducts();
};

onMounted(() => {
  MyProductStore.getProductsFromApi();
  MyProductStore.singleProduct = {};
});
</script>
