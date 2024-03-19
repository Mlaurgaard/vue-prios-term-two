<template>
  <!-- <pre>{{ myProducts }}</pre> -->
  <div v-if="MyProductStore.isLoading" class="flex w-100 mx-auto my-auto">
    <span>Loading Products...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>
  <!-- Card Positionals -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto px-8 py-4 bg-base-300 w-full"
    v-else-if="!MyProductStore.isLoading"
  >
    <!-- Card -->
    <div
      v-for="product in MyProductStore.myProducts"
      class="flex mx-auto md:mx-2"
    >
      <div
        class="card w-96 bg-base-100 shadow-md"
        @click="getProductData(product)"
      >
        <!-- Card Image -->
        <figure class="h-14 w-24 p-6 mt-2 mx-auto">
          <img :src="product.image" alt="Shoes" class="bg-cover" />
        </figure>
        <!-- Card Body -->
        <div class="card-body">
          <!-- Card Title -->
          <h2 class="card-title line-clamp-2 text-sm">
            <router-link to="ProductCard">{{ product.title }}</router-link>
          </h2>
          <!-- Card Description -->
          <p class="line-clamp-2 text-xs">{{ product.description }}</p>
          <!-- Buy button -->
          <button class="rounded p-1 mt-2 ml-auto bg-base-300 text-xs">
            Buy Now
          </button>
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
