<template>
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
          class="flex mx-auto underline justify-center lg:flex lg:flex-row lg:h-1/5 lg:mt-4 lg:justify-center text-bold"
        >
          {{ myUserStore.userObject.username }}
        </div>
        <!-- space block -->
        <div class="block my-6 lg:hidden"></div>
        <!-- right/top side of card -->
        <div class="lg:flex lg:flex-row lg:h-2/3">
          <div class="flex flex-row lg:mx-auto">
            <div class="flex flex-col w-1/2 lg:w-2/3 lg:flex-col">
              <!-- name -->
              <span class="mt-2 mx-auto lg:my-2">Name</span>
              <span class="mx-auto mb-4"
                >{{ myUserStore.userObject.name.firstname }}
                {{ myUserStore.userObject.name.lastname }}</span
              >
              <!-- address -->
              <span class="mt-2 mx-auto lg:my-2">Address</span>
              <span class="mx-auto">DisplayAdress</span>
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
          <!-- edit button -->
        </div>
      </div>
      <!-- profile name -->
    </div>
  </div>
  <!-- purchases / history -->
  <section>
    <h2 class="flex justify-center my-2 font-bold">Purchase History</h2>
    <div role="tablist" class="tabs tabs-lifted tabs-lg">
      <a role="tab" class="tab tab-active">Recent</a>
      <a role="tab" class="tab">History</a>
    </div>
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
        <tbody>
          <td>1</td>
          <td>item 1</td>
          <td>[1]</td>
          <td>01.01.2024</td>
          <td>19195</td>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
// Imports
import { onMounted, ref } from "vue";
import { useMyUserStore } from "@/stores/MyUserStore";
import { useMyProductStore } from "@/stores/MyProductStore";

// Store imports
const myUserStore = useMyUserStore();

// const myProductStore = useMyProductStore();

const fetchUsers = () => {
  myUserStore.getUsersFromApi();
};

// mounts
onMounted(() => {
  fetchUsers();
});
</script>
