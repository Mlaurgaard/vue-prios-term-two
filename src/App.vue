<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
/*
Imports
*/
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/layout/NavBar.vue";
</script>
