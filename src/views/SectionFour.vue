<script setup lang="ts">
import { Post } from "../helper/interface";
import NormPost from "../components/Posts/NormPost.vue";
import startSection from "../components/icons/startSection.vue";
import ArrowRight from "../components/icons/arrowRight.vue";
import BaseBr from "../components/BaseBr.vue";
import { ref } from "vue";
const forNormPosts = ref<Post[]>([
  {
    url: "/images/fourSec1.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "/images/fourSec2.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "/images/fourSec3.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "/images/fourSec4.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "/images/fourSec5.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "/images/fourSec6.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
]);
</script>
<template>
  <div class="w-full bg-white rounded-2xl p-5">
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-start">
        <startSection class="text-[#1D3068]" />
        <p class="font-bold text-lg text-[#1D3068] ml-1">Мақолалар</p>
      </div>
      <div class="flex justify-end cursor-pointer items-center">
        <p class="font-bold text-lg text-[#1D3068] mr-2">Барчаси</p>
        <ArrowRight class="w-5 h-5" />
      </div>
    </div>
    <BaseBr />
    <div class="grid grid-cols-3 gap-4">
        <NormPost v-for="(item, index) in forNormPosts" :post-data="item"/>
    </div>
  </div>
</template>
