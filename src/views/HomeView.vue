<template>
  <Section>
    <!-- Slide container -->
    <div class="flex w-full h-96 bg-gray-400">
      <!-- container for button left -->
      <div class="flex justify-end w-1/3 bg-gray-300 my-auto">
        <button class="rounded p-2 bg-green-100 px-4 active:bg-gray-200">
          &LeftArrow;
        </button>
      </div>
      <!-- conainer for main card -->
      <div class="block w-2/3 bg-gray-400">
        <div class="flex justify-center pt-4 bg-blue-100">Card</div>
        <div class="flex justify-center bg-blue-200">
          <span></span>
        </div>
      </div>
      <!-- container for button right -->
      <div class="flex w-1/3 bg-gray-300 my-auto">
        <button class="rounded p-2 bg-green-100 px-4 active:bg-gray-200">
          &rightarrow;
        </button>
      </div>
    </div>
  </Section>
</template>
