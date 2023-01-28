<script setup lang="ts">
import { computed, ref } from "vue";
import startSection from "../components/icons/startSection.vue";
import RecLeft from "../components/icons/RecLeft.vue";
import RecRight from "../components/icons/RecRight.vue";
import NormPost from "../components/Posts/NormPost.vue";
import { Post } from "../helper/interface";
const currentSlide = ref<number>(0)
const twoNormPosts = ref<Post[]>([
  {
    url: "src/assets/images/twoSmall.png",
    text: "Вакант лавозимларга энг кўп очиқ танлов ўтказган ташкилотлар маълум қилинди",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/twoSmall1.png",
    text: "“Тизимда жуда катта коррупцион схема авж олиб кетган” — Зарифбой Ибодуллаев",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/twoSmall2.png",
    text: "“Тизимда жуда катта коррупцион схема авж олиб кетган” — Зарифбой Ибодуллаев",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/twoSmall4.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/twoSmall3.png",
    text: "“Амбронол” сиропи ҳам сотувдан олинмоқда",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/twoSmall4.png",
    text: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/twoSmall5.png",
    text: "Бош прокуратура ЙПХ масъуллари ахбороти асосида тайёрланган кўрсатувга эътироз билдирди",
    type: "Ўзбекистон",
    date: "2 кун олдин",
  },
]);
function nextPost():void{
  if(currentSlide.value < Math.floor(twoNormPosts.value.length / 6)){
    currentSlide.value +=1
  }
  else{
    currentSlide.value = 0
  }
  
}
function prevPost():void{
  if(currentSlide.value > 0){
    currentSlide.value -=1 
  }
}
</script>
<template>
  <div class="w-full bg-white rounded-2xl p-5 overflow-x-hidden">  
    <div class="flex justify-between items-center">
        <div class="flex items-center justify-start">
            <startSection class="w-4 h-4 text-[#1D3068]"/>
            <p class="text-lg font-semibold ml-1 text-[#1D3068]">Муҳаррир танлови</p>
        </div>
        <div class="flex ">
          <RecLeft @click="prevPost" class="cursor-pointer"/>
          <RecRight @click="nextPost" class="cursor-pointer"/>
        </div>
    </div>
    <div class="flex items-center w-auto transition-all" :style="{'width': (twoNormPosts.length * 100) + '%', 'margin-left': '-' + (currentSlide*100) + '%' }">
      <NormPost class="w-[300px] first:ml-0 ml-0.5" imgSize="w-[298px]" v-for="(item, index) in twoNormPosts" :post-data="item"/>
    </div>
  </div>
</template>
