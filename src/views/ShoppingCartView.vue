<template>
  <div class="flex flex-col mx-auto mt-4 w-full h-auto bg-base-300">
    <div class="flex flex-col w-full">
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
    <div class="hidden justify-center font-thin italic">
      Your shopping cart is empty..
    </div>
    <!-- items in cart -->
    <table class="table">
      <thead>
        <tr>
          <th class="pr-14"></th>
          <th class="pl-5">Product</th>
          <th>Remove</th>
          <th>Amount</th>
          <th>Price($)</th>
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
              href="Productlink"
              @click="getProductData(product)"
              class="hover:btn-link"
            >
              <!-- {{ MyProductStore.productArrayInCart }} -->
              {{ product.title }}
            </a>
          </td>
          <!-- Remove product button -->
          <td>
            <button @click="MyProductStore.deleteitemFromCart(product)">
              delete
            </button>
          </td>
          <!-- Increase amount -->
          <td>
            <button class="px-0.5 rounded bg-gray-400">&minus;</button>
            <input
              class="w-10 text-center text-xs"
              type="tel"
              value="1"
              style="width: 1.1rem"
            />
            <button
              class="px-0.5 rounded bg-gray-400"
              @click="MyProductStore.amountOfItemsInCart(product)"
            >
              &plus;
            </button>
          </td>
          <td class="mr-2 text-xs text-center">
            {{ product.price }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td class="font-bold text-xs">Total price:</td>
          <td class="font-bolder text-xs">109.95</td>
        </tr>
      </tfoot>
    </table>
    <!-- Buttons -->
    <div class="flex mt-auto mb-4 mx-4 justify-between">
      <button class="rounded bg-red-400 p-2 text-sm">&lt; Back</button>
      <button class="rounded bg-green-400 p-2 text-sm">Checkout &gt;</button>
    </div>
  </div>
</template>

<script setup>
// Imports
import { ref, onMounted } from "vue";

//Store Imports
import { useMyProductStore } from "@/stores/MyProductStore";

// stores
const MyProductStore = useMyProductStore();
</script>
