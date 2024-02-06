<template>
  <!-- <pre>{{ myProducts }}</pre> -->
  <div v-if="isLoading">
    <span class="loading loading-spinner text-neutral"></span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-10">
    <div v-for="product in myProducts.data" class="flex">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img :src="product.image" alt="Shoes" height="50px" width="50px" />
        </figure>
        <div class="card-body">
          <h2 class="card-title line-clamp-2">{{ product.title }}</h2>
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
import axios from "axios";

const myProducts = ref([]);

const isLoading = ref(true);

const getProductsFromApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products/", {
      headers: {
        "Content-Type": "application/json",
        // Add other headers as needed
      },
    });
    console.log("response", response);
    myProducts.value = response;
    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getProductsFromApi();
});

const clickedProduct = (product) => {
  console.log(product);
};
</script>
