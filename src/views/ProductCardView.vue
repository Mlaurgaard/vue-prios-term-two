<template>
  <div v-if="MyProductStore.isLoading" class="flex w-100 mx-auto my-auto">
    <span>Loading Product...</span>
    <span class="loading loading-spinner text-neutral"></span>
  </div>

  <div
    v-else-if="!MyProductStore.isLoading"
    class="card w-96 md:w-10/12 h-auto bg-base-100 shadow-xl mx-auto mt-4"
  >
    <figure>
      <img
        :src="MyProductStore.getsingleproduct.image"
        alt="Product"
        height="100px"
        width="100px"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title mx-12 text-justify text-base">
        {{ MyProductStore.getsingleproduct.title }}
      </h2>
      <p class="mx-4 pt-2 text-justify text-sm">
        {{ MyProductStore.getsingleproduct.description }}
      </p>
      <div class="card-actions justify-between mt-4">
        <span class="font-bolder p-2"
          >Rating: {{ MyProductStore.getsingleproduct.rating.rate }}</span
        >
        <span class="font-bolder p-2"
          >{{ MyProductStore.getsingleproduct.price }}$</span
        >
        <button
          class="p-2 rounded bg-base-300 hover:bg-slate-200"
          @click="clickBuyProduct()"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// store imports
import router from "@/router";
import { useMyProductStore } from "@/stores/MyProductStore";
import { ref, onMounted, computed } from "vue";

// stores
const MyProductStore = useMyProductStore();

const clickBuyProduct = () => {
  MyProductStore.saveProductsToCart();
  // MyProductStore.putProductInCart();
  console.log("buyingProduct");
  router.push({ name: "cart" });
};
</script>
