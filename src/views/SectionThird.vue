<script setup lang="ts">
import { ref } from "vue";
import BigPost from "../components/Posts/BigPost.vue";
import SmallPost from "../components/Posts/SmallPost.vue";
import BaseBr from "../components/BaseBr.vue";
import { Post } from "../helper/interface";
import startSection from "../components/icons/startSection.vue";
import ArrowRight from "../components/icons/arrowRight.vue";
const thirdBigPost = ref<Post>({
  url: "src/assets/images/modric.png",
  text: "Модрич Саудия клубининг таклифини рад қилди",
  type: "Спорт",
  date: "2 кун олдин",
});

const spallPosts = ref<Post[]>([
  {
    url: "src/assets/images/small4.png",
    text: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
    type: "Спорт",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/suarez.png",
    text: "Луис Суарес «Гремио» билан шартнома имзолади",
    type: "Спорт",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/ronaldo.png",
    text: "Криштиану Роналду «Ан Наср» билан икки йиллик шартнома имзолади",
    type: "Спорт",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/ramos.png",
    text: "Роналду ва Рамос битта жамоада фаолиятини давом эттириши мумкин",
    type: "Спорт",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/eldor.png",
    text: "Элдор Шомуродов «Торино»га ўтиши мумкин",
    type: "Спорт",
    date: "2 кун олдин",
  },
]);
</script>
<template>
  <div class="w-full bg-white rounded-2xl p-5">
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-start">
        <startSection class="text-[#1D3068]"/>
        <p class="font-bold text-lg text-[#1D3068] ml-1">#Sport</p>
      </div>
      <div class="flex justify-end cursor-pointer items-center">
        <p class="font-bold text-lg text-[#1D3068] mr-2">Барчаси</p>
        <ArrowRight class="w-5 h-5"/>
      </div>
    </div>
    <BaseBr/>
    <div class="flex items-start justify-between">
      <div class="w-[68%]">
        <BigPost typeData="mt-16" :post-data="thirdBigPost" />
      </div>
      <div class="w-[37%] ml-5 flex">
        <div class="w-[1px] bg-slate-300 h-auto mt-1 mb-4"></div>
        <div class="ml-5">
          <div v-for="(item, index) in spallPosts" :key="index">
            <SmallPost :post-data="item" />
            <BaseBr/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
