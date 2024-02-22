<template>
  <div v-if="MyProductStore.isLoading">
    <span>Loading Products...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>

  <div
    v-else-if="!MyProductStore.isLoading"
    class="card w-96 bg-base-100 shadow-xl"
  >
    <figure>
      <img
        :src="MyProductStore.singleProduct.image"
        alt="Shoes"
        height="50px"
        width="50px"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title line-clamp-2">
        {{ MyProductStore.singleProduct.title }}
      </h2>
      <p class="line-clamp-2">
        {{ MyProductStore.singleProduct.description }}
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// store imports
import { useMyProductStore } from "@/stores/MyProductStore";
import { ref, onMounted, computed } from "vue";

// stores
const MyProductStore = useMyProductStore();

// const getProductId = () => {
//   // const productID = localStorage.getItem("productID");
//   // const productID = localStorage.getItem("productID");
//   // MyProductStore.getIdOfIdroducts(productID);
// };

// onMounted(() => {
//   MyProductStore.getIdOfIdroducts();
// });
</script>
