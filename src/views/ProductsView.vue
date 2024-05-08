<template>
  <!-- <pre>{{ myProducts }}</pre> -->
  <div v-if="MyProductStore.isLoading" class="flex w-100 mx-auto my-auto">
    <span>Loading Products...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>
  <!-- Card Positionals -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-2 px-4 lg:px-24 py-4 bg-base-300 w-full"
    v-else-if="!MyProductStore.isLoading"
  >
    <!-- Card -->
    <div v-for="product in MyProductStore.myProducts" class="flex md:mx-2">
      <div
        class="card w-96 mx-auto bg-base-100 shadow-md"
        @click="getProductId(product)"
      >
        <router-link to="ProductCard">
          <!-- Card Image -->
          <figure class="h-14 w-1/4 md:w-24 p-6 mt-2 mx-auto">
            <img :src="product.image" alt="Shoes" class="bg-cover" />
          </figure>
          <!-- Card Body -->
          <div class="card-body pb-4">
            <!-- Card Title -->
            <h2 class="card-title line-clamp-2 text-sm">
              {{ product.title }}
            </h2>
            <!-- Card Description -->
            <p class="line-clamp-2 text-xs">{{ product.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
//imports
import { ref, onMounted } from "vue";

// Store Imports
import { useMyProductStore } from "@/stores/MyProductStore";

// Stores
const MyProductStore = useMyProductStore();

// Functions
const getProductId = (product) => {
  MyProductStore.productID = product.id;

  MyProductStore.getIdOfIdroducts();
};

// Mounts
onMounted(() => {
  MyProductStore.getProductsFromApi();
  MyProductStore.singleProduct = {};
});
</script>
