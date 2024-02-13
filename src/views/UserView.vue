<template>
  <div class="flex w-100 bg-green-500">
    <!-- user card container -->
    <div class="flex mx-auto w-2/4 h-64 bg-blue-100 rounded my-2">
      <!-- user panel left -->
      <div class="flex my-auto w-1/3 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-24 h-24"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- user panel right -->
      <div class="flex flex-col w-2/3 bg-gray-300 rounded">
        <div class="flex flex-row h-1/6">
          <div class="mx-auto pt-2">Your Profile</div>
        </div>
        <!-- user info -->
        <div class="pl-4">
          <!-- username -->
          <div class="flex flex-row">
            <div class="">here.</div>
            <div class="">username</div>
          </div>
          <!-- name -->
          <div class="flex">
            <div class="">here.</div>
            <div class="">name</div>
          </div>
          <!-- email -->
          <div class="flex">
            <div class="">here.</div>
            <div class="">email</div>
          </div>
          <!-- phone -->
          <div class="flex">
            <div class="">here.</div>
            <div class="">phone</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- purchases / history -->
  <section>History</section>
</template>

<script setup>
// Imports
import { onMounted } from "vue";
import { useMyUserStore } from "@/stores/MyUserStore";

// Store imports
const myUserStore = useMyUserStore();

// mounts
onMounted(() => {
  myUserStore.getUsersFromApi();
});
</script>
