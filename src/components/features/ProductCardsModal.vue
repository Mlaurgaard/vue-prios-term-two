<template>
  <pre>{{ getBlown }}</pre>
  <div v-for="product in MyProductStore.myProducts" class="flex">
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
</template>

<script setup>
// store imports
import { useMyProductStore } from "@/stores/MyProductStore";
import { onMounted } from "vue";
import { ref } from "vue";

// stores
const MyProductStore = useMyProductStore();

// const getProductId = () => {
//   MyProductStore.getIdOfProducts();
// };

onMounted(() => {
  // getProductsFromApi();
  MyProductStore.getProductsFromApi();
  // getProductId();
});
</script>
