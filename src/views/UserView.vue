<template>
  <div class="flex w-100 bg-green-500">
    <!-- user card container phone screens -->
    <div class="flex flex-col h-80 bg-gray-200 m-auto my-4 w-80 lg:hidden">
      <!-- user icon -->
      <div class="mx-auto overflow-visible sticky">
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
      <!-- profile name -->
      <div class="mx-auto underline">USERNAME</div>
      <!-- right side of card -->
      <div class="flex flex-row">
        <div class="flex flex-col w-1/2">
          <!-- name -->
          <span class="mt-2 mx-auto">Name</span>
          <span class="mx-auto">Display name</span>
          <!-- adress -->
          <span class="mt-2 mx-auto">Adress</span>
          <span class="mx-auto">Display Adress</span>
        </div>
        <!-- left side of card -->
        <div class="flex flex-col w-1/2">
          <!-- phone -->
          <span class="mt-2 mx-auto">Phone</span>
          <span class="mx-auto">Display Number</span>
          <!-- Email -->
          <span class="mt-2 mx-auto">Email</span>
          <span class="mx-auto">Display Email</span>
        </div>
      </div>
      <!-- edit button -->
      <div class="mx-auto my-4">
        <Button class="rounded bg-gray-400 p-1">Edit</Button>
      </div>
    </div>
    <!-- Desktop -->
    <!-- user card container desktop -->
    <div class="flex flex-col h-80 bg-gray-200 m-auto my-4 w-96">
      <!-- user icon -->
      <div class="mx-auto overflow-visible sticky">
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
      <!-- profile name -->
      <div class="mx-auto underline">USERNAME</div>
      <!-- right side of card -->
      <div class="flex flex-row">
        <div class="flex flex-col w-1/2">
          <!-- name -->
          <span class="mt-2 mx-auto">Name</span>
          <span class="mx-auto">Display name</span>
          <!-- adress -->
          <span class="mt-2 mx-auto">Adress</span>
          <span class="mx-auto">Display Adress</span>
        </div>
        <!-- left side of card -->
        <div class="flex flex-col w-1/2">
          <!-- phone -->
          <span class="mt-2 mx-auto">Phone</span>
          <span class="mx-auto">Display Number</span>
          <!-- Email -->
          <span class="mt-2 mx-auto">Email</span>
          <span class="mx-auto">Display Email</span>
        </div>
      </div>
      <!-- edit button -->
      <div class="mx-auto my-4">
        <Button class="rounded bg-gray-400 p-1">Edit</Button>
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
