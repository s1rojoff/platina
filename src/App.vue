<script setup lang="ts">
import Header from "./components/header/index.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
  <div class="px-32 bg-white">
    <Header />
  </div>
  <router-view></router-view>
  <div class="bg-white px-32">
    <Footer />
  </div>
</template>
