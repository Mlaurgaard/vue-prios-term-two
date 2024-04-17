<template>
  <!-- Slide container -->
  <h3 class="w-full bg-gray-300 p-2 text-center font-bold">Latest Products</h3>
  <div class="flex w-full h-80 bg-gray-300 justify-center">
    <!-- Slidebutton left -->
    <button
      class="p-6 rounded my-auto left-0 hidden md:block"
      @click="forwardSlider()"
    >
      ❮
    </button>
    <!-- conainer for main card -->
    <div class="block carousel my-auto">
      <!-- Cards -->
      <div
        v-for="(carouselCard, carouselCardIndex) in latestCarouselCards"
        class="flex m-auto md:mx-2"
      >
        <div
          v-if="carouselCardIndex == carouselIndex"
          id="carouselCardIndex"
          class="card w-96 bg-base-100 shadow-md h-64"
          @click="getProductId(carouselCard)"
        >
          <router-link to="ProductCard">
            <!-- Card Image -->
            <figure class="h-18 w-1/4 md:w-24 p-6 mx-auto">
              <img
                :src="carouselCard.image"
                :alt="carouselCard.category"
                class="bg-cover"
              />
            </figure>
            <!-- Card Body -->
            <div class="card-body my-auto">
              <!-- Card Title -->
              <h2 class="card-title line-clamp-2 text-sm h-6">
                {{ carouselCard.title }}
              </h2>
              <!-- Card Description -->
              <p class="line-clamp-2 text-xs">
                {{ carouselCard.description }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- Carousel "Wheele"/buttons -->
      <div class="flex justify-center w-full py-2 gap-2">
        <button
          @click="changeSlide(0)"
          class="btn btn-xs p-5 md:p-3"
          :class="carouselIndex === 0 ? 'bg-gray-400' : ''"
        ></button>

        <button
          @click="changeSlide(1)"
          class="btn btn-xs p-5 md:p-3"
          :class="carouselIndex === 1 ? 'bg-gray-400' : ''"
        ></button>
        <button
          @click="changeSlide(2)"
          class="btn btn-xs p-5 md:p-3"
          :class="carouselIndex === 2 ? 'bg-gray-400' : ''"
        ></button>
      </div>
    </div>
    <!-- Slidebutton right -->
    <button
      class="p-6 rounded my-auto right-0 hidden md:block"
      @click="backwardSlider()"
    >
      ❯
    </button>
  </div>
</template>

<script setup>
// imports
import router from "@/router";
import { onMounted, computed, ref } from "vue";
import { useMyProductStore } from "@/stores/MyProductStore";

// stores
const MyProductStore = useMyProductStore();

// carousel functions
const carouselIndex = ref(0);

const forwardSlider = () => {
  switch (carouselIndex.value) {
    case 0:
      carouselIndex.value = 2;
      break;
    case 1:
      carouselIndex.value = 0;
      break;
    case 2:
      carouselIndex.value = 1;
      break;
    default:
      break;
  }
};

const backwardSlider = () => {
  switch (carouselIndex.value) {
    case 0:
      carouselIndex.value = 1;
      break;
    case 1:
      carouselIndex.value = 2;
      break;
    case 2:
      carouselIndex.value = 0;
      break;
    default:
      break;
  }
};

const changeSlide = (targetIndex) => {
  carouselIndex.value = targetIndex;
};

// Get ID for Store
const getProductId = (product) => {
  console.log("what is this", product);
  MyProductStore.productID = product.id;

  MyProductStore.getIdOfIdroducts();
};

// computed
const latestCarouselCards = computed({
  name: "latestCarouselCards",
  get: () => {
    return MyProductStore.latestProductCarousel();
  },
});

onMounted(() => {
  MyProductStore.getProductsFromApi();
  MyProductStore.singleProduct = {};
});
</script>
