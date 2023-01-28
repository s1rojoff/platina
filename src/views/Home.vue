<script setup lang="ts">
import Header from "../components/header/index.vue";
import SectionOne from "../views/SectionOne.vue";
import SectionTwo from "./SectionTwo.vue";
import SectionThird from "./SectionThird.vue";
</script>
<template>
  <div class="pl-32 pr-32 bg-white">
    <Header />
  </div>
  <div class="bg-[rgb(248,248,255)] pt-7 pl-32 pr-32">
    <SectionOne />
  </div>
  <div class="bg-[rgb(248,248,255)] pt-7 pl-32 pr-32 pb-10">
    <SectionTwo/>
  </div>
  <div class="bg-[rgb(248,248,255)] pt-7 pl-32 pr-32 pb-10">
    <SectionThird/>
  </div>
</template>
