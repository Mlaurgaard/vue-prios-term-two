<template>
  <NavBar />
  <RouterView class="min-h-screen" />
  <Footer />
</template>

<script setup>
/*
Imports
*/
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
