<template>
  <!-- Register Container -->
  <div class="flex flex-col w-96 h-96 bg-base-200 mx-auto my-auto">
    <h3 class="mx-auto mt-4 font-bold">Register</h3>
    <!-- First name -->
    <div class="mx-auto mt-2">
      <div class="my-auto">
        <p class="text-sm">First name:</p>
        <input class="mb-1" type="text" />
      </div>
    </div>
    <!-- Last name -->
    <div class="mx-auto mt-2">
      <div class="my-auto">
        <p class="text-sm">Last name:</p>
        <input class="mb-1" type="text" />
      </div>
    </div>
    <!-- Email -->
    <div class="mx-auto mt-2">
      <div class="my-auto">
        <p class="text-sm">E-mail:</p>
        <input class="mb-1" type="text" />
      </div>
    </div>
    <!-- password -->
    <div class="mx-auto">
      <div class="mt-2">
        <p class="text-sm">Password:</p>
        <input class="mb-1" type="password" />
      </div>
    </div>
    <!-- confirm password -->
    <div class="mx-auto">
      <div class="mt-2">
        <p class="text-sm">Confirm Password:</p>
        <input class="mb-1" type="password" />
      </div>
    </div>
    <div>
      <!-- Buttons -->
      <div class="mx-auto space-x-7 ml-52 mt-2">
        <button class="p-2 rounded bg-green-400 active:bg-gray-400 text-xs">
          Confirm &blacktriangleright;
        </button>
      </div>
    </div>
  </div>
</template>
