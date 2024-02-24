<template>
  <div v-if="MyProductStore.isLoading">
    <span>Loading Products...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>

  <div
    v-else-if="!MyProductStore.isLoading"
    class="card w-96 md:w-10/12 h-auto bg-base-100 shadow-xl mx-auto mt-4"
  >
    <figure>
      <img
        :src="MyProductStore.singleProduct.image"
        alt="Product"
        height="100px"
        width="100px"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title mx-12 line-clamp-3">
        {{ MyProductStore.singleProduct.title }}
      </h2>
      <p class="mx-12 pt-4">
        {{ MyProductStore.singleProduct.description }}
      </p>
      <div class="card-actions justify-between">
        <!-- <span class="font-bold mt-3"
          >Rating: {{ MyProductStore.singleProduct.rating.rate }}</span
        > -->
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
