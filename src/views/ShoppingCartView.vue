<template>
  <div class="flex flex-col mx-auto mt-4 w-full h-auto bg-base-100">
    <div class="flex flex-col">
      <!-- icon -->
      <div class="flex flex-col-1 h-1/6 justify-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
    <!-- title -->
    <div class="flex flex-col-2 w-full justify-center font-bolder">Cart</div>
    <!-- no items in cart -->
    <div
      class="hidden text-center font-thin italic p-6"
      v-if="MyProductStore.productArrayInCart.length === 0"
      style="display: block"
    >
      Your shopping cart is empty..
    </div>
    <!-- items in cart -->
    <table class="table" v-show="MyProductStore.productArrayInCart.length > 0">
      <thead>
        <tr class="text-center">
          <th class="pr-14"></th>
          <th>Product</th>
          <th>Remove</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>
      </thead>
      <!-- product show -->
      <tbody v-for="product in MyProductStore.productArrayInCart">
        <tr>
          <!-- product image -->
          <td class="ml-2">
            <a><img :src="product.image" alt="" class="h-12 w-12" /></a>
          </td>
          <!-- product title w/link -->
          <td class="text-sm ml-1">
            <a
              href="ProductCard"
              @click="getProductId(product)"
              class="hover:btn-link"
            >
              <!-- {{ MyProductStore.productArrayInCart }} -->
              {{ product.title }}
            </a>
          </td>
          <!-- Remove product button -->
          <td class="text-center">
            <button @click="MyProductStore.deleteitemFromCart(product)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </td>
          <!-- Increase amount -->
          <td>
            <button
              class="px-0.5 rounded bg-gray-400"
              @click="MyProductStore.decreaseAmountOfItemsInCart(product)"
            >
              &minus;
            </button>
            <input
              class="w-10 text-center text-xs"
              type="tel"
              v-model="product.quantity"
              style="width: 1.1rem"
              readonly
            />
            <button
              class="px-0.5 rounded bg-gray-400"
              @click="MyProductStore.increaseAmountOfItemsInCart(product)"
            >
              &plus;
            </button>
          </td>
          <td class="mr-2 text-xs text-center">
            {{ (product.price * product.quantity).toFixed(2) }}$
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="font-bold text-xs">Total:</td>
          <td class="font-bolder text-xs">
            {{ MyProductStore.totalCostInCart().toFixed(2) }}$
          </td>
        </tr>
      </tfoot>
    </table>
    <!-- Buttons -->
    <div class="flex mt-auto mb-4 mx-4 justify-between">
      <button class="rounded bg-red-400 p-2 text-sm" @click="$router.go(-2)">
        &lt; Back
      </button>
      <button
        class="rounded bg-green-400 p-2 text-sm"
        v-if="MyProductStore.productArrayInCart.length > 0"
        :disabled="MyProductStore.productArrayInCart.length === 0"
        @click="MyProductStore.sendProductToPurchaseHistory(product)"
      >
        Checkout &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
// Imports
import { ref, onMounted } from "vue";

//Store Imports
import { useMyProductStore } from "@/stores/MyProductStore";
import { useMyUserStore } from "@/stores/MyUserStore";

// stores
const MyProductStore = useMyProductStore();
const myUserStore = useMyUserStore();

// Get Id of Product
const getProductId = (product) => {
  MyProductStore.productID = product.id;

  MyProductStore.getIdOfIdroducts();
};
</script>
