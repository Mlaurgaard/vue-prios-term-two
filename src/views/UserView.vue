<template>
  <!-- Page content -->
  <div class="flex w-100 bg-base-300">
    <!-- user card container phone screens -->
    <div
      class="flex flex-col h-80 bg-base-100 m-auto my-4 w-80 md:w-6/12 lg:w-9/12 lg:flex-row"
    >
      <!-- user icon -->
      <div class="mx-auto lg:my-auto lg:w-1/4 lg:flex lg:justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-20 h-20"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="lg:w-3/4">
        <div
          class="flex mx-auto underline justify-center lg:flex lg:flex-row lg:h-1/5 lg:mt-4 lg:justify-center font-bold"
        >
          Profile Page
        </div>
        <!-- space block -->
        <div class="block my-6 lg:hidden"></div>
        <!-- right/top side of card -->
        <div class="lg:flex lg:flex-row lg:h-2/3">
          <div class="flex flex-row lg:mx-auto">
            <div class="flex flex-col w-1/2 lg:w-2/3 lg:flex-col">
              <!-- username -->
              <span class="mt-2 mx-auto lg:my-2">Username</span>
              <span class="mx-auto mb-4">{{
                myUserStore.userObject.username
              }}</span>
              <!-- name -->
              <span class="mt-2 mx-auto lg:my-2">Full Name</span>
              <span class="mx-auto">
                {{
                  myUserStore.userObject.name.firstname
                    .charAt(0)
                    .toUpperCase() +
                  myUserStore.userObject.name.firstname.slice(1)
                }}
                {{
                  myUserStore.userObject.name.lastname.charAt(0).toUpperCase() +
                  myUserStore.userObject.name.lastname.slice(1)
                }}
              </span>
            </div>
            <div class="mx-24 hidden lg:block"></div>
            <!-- left/bottom side of card -->
            <div class="flex flex-col w-1/2 lg:w-2/3 lg:flex-col">
              <!-- phone -->
              <span class="mt-2 mx-auto lg:my-2">Phone</span>
              <span class="mx-auto mb-4">{{
                myUserStore.userObject.phone
              }}</span>
              <!-- Email -->
              <span class="mt-2 mx-auto lg:my-2">Email</span>
              <span class="mx-auto">{{ myUserStore.userObject.email }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- purchases / history -->
  <section class="bg-base-100">
    <h2 class="flex justify-center my-2 font-bold">Purchase History</h2>
    <div class="overflow-x-auto">
      <table class="table md:table-md lg:table-lg">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Order Date</th>
            <th>Order Id</th>
          </tr>
        </thead>
        <tbody v-for="(product, index) in userPurchasedProducts">
          <!-- number -->
          <td>{{ index + 1 }}</td>
          <!-- Image and title -->
          <td class="flex">
            <!-- img -->
            <img :src="product.image" alt="" class="h-6 w-6 my-auto mr-4" />
            <!-- title -->
            <a
              href="ProductCard"
              @click="getProductId(product)"
              class="line-clamp-1 hover:btn-link"
            >
              {{ product.title }}
            </a>
          </td>
          <!-- quantity -->
          <td class="mx-auto">{{ product.quantity }}</td>
          <!-- date of purchase -->
          <td>{{ product.purchaseDate }}</td>
          <!-- orderID -->
          <td>{{ product.orderID }}</td>
        </tbody>
      </table>
    </div>
  </section>
  <div
    class="hidden text-center font-thin italic p-6 bg-base-100 h-full"
    v-if="myProductStore.purchasedProducts.length === 0"
    style="display: block"
  >
    No purchase history found
  </div>
  <div
    class="flex bg-base-100 h-full"
    v-show="myProductStore.purchasedProducts.length > 0"
  >
    <button
      class="rounded bg-base-300 mx-auto mt-8 mb-8 p-1"
      @click="confirmClearHistory()"
    >
      Clear History
    </button>
  </div>
</template>

<script setup>
// Imports
import { onMounted, ref } from "vue";
import { useMyUserStore } from "@/stores/MyUserStore";
import { useMyProductStore } from "@/stores/MyProductStore";

// Store imports
const myUserStore = useMyUserStore();
const myProductStore = useMyProductStore();

const userPurchasedProducts = myProductStore.purchasedProducts.filter(
  (product) => product.userId === myUserStore.userObject.id
);

const fetchUsers = () => {
  myUserStore.getUsersFromApi();
};

const confirmClearHistory = () => {
  const question = window.confirm("Do you want to clear purchase history?");
  if (question) {
    window.location.reload();
    myProductStore.purchasedProducts = [];
  } else {
    // Do nothing
  }
};

// Get Id of Product
const getProductId = (product) => {
  myProductStore.productID = product.id;

  myProductStore.getIdOfIdroducts();
};

// mounts
onMounted(() => {
  userPurchasedProducts;
  fetchUsers();
});
</script>
