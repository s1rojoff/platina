<script setup lang="ts">
import Header from "../components/header/index.vue";
import SectionOne from "../views/SectionOne.vue";
import SectionTwo from "./SectionTwo.vue";
import SectionThird from "./SectionThird.vue";
import SectionFour from "./SectionFour.vue";
import SectionFive from "./SectionFive.vue";
</script>
<template>
  <div class="pl-32 pr-32 bg-white">
    <Header />
  </div>
  <div class="bg-[rgb(248,248,255)] pt-7 px-32">
    <SectionOne />
  </div>
  <div class="bg-[rgb(248,248,255)] px-32 pb-10">
    <SectionTwo/>
  </div>
  <div class="bg-[rgb(248,248,255)] px-32 pb-10">
    <SectionThird/>
  </div>
  <div class="bg-[rgb(248,248,255)] px-32 pb-10">
    <SectionFour/>
  </div>
  <div class="bg-[rgb(248,248,255)] px-32 pb-10">
    <SectionFive/>
  </div>
</template>
