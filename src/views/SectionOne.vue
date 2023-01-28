<script setup lang="ts">
import { ref } from "vue";
import BigPost from "../components/Posts/BigPost.vue";
import NormPost from "../components/Posts/NormPost.vue";
import startSection from "../components/icons/startSection.vue";
import arrowRight from "../components/icons/arrowRight.vue";
import SmallPost from "../components/Posts/SmallPost.vue";
import BaseBr from "../components/BaseBr.vue";
import { Post } from "../helper/interface";
const headBigPost = ref<Post>({
  url: "src/assets/images/astana.png",
  text: "Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди",
  subtext:
    "2023 йил 2 январь куни Тошкент – Олмаота йўналиши бўйича КC128 рейсини амалга ошириш чоғида «Air Astana» авиакомпаниясининг самолёти Чимкент парвозларни бошқариш маркази ҳудудида 350 (10600 м) баландликда кучли турбулентликка учради. Самолёт...",
  type: "Жамият",
  date: "2 кун олдин",
});
const oneNormPost = ref<Post[]>([
  {
    url: "src/assets/images/normal1.png",
    text: "Францияда 700 га яқин машина ёқиб юборилди",
    type: "Жаҳон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/normal2.png",
    text: "Ўзбекистонда 3 январь куни кузатиладиган об-ҳаво маълумоти эълон қилинди ҳаво маълумоти эълон қилинди",
    type: "Жамият",
    date: "2 кун олдин",
  },
]);
const smallPosts = ref<Post[]>([
  {
    url: "src/assets/images/small1.png",
    text: "Туркияда кўплаб авиарейслар туман сабаб бекор қилинди",
    type: "Жаҳон",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/small1.png",
    text: "Тошкентдаги 31 та олигоҳда дарс вақти ўзгаради",
    type: "Жамият",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/small1.png",
    text: "Қайси ҳудудда аёл раҳбарлар бошқарувидаги корхоналар сони кўп?",
    type: "Жамият",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/small1.png",
    text: "Андижонда сотувчи мижозининг пластик картасидан пул ўғирлади",
    type: "Жамият",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/small1.png",
    text: "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
    type: "Спорт",
    date: "2 кун олдин",
  },
  {
    url: "src/assets/images/small1.png",
    text: "Air Astana авиакомпаниясининг Тошкент-Олмаота рейси йўловчилари жабрланди",
    type: "Жамият",
    date: "2 кун олдин",
  },
]);
</script>
<template>
  <div class="w-full flex items-start justify-between pb-10">
    <div class="mr-5 w-[68%] bg-white p-5 rounded-2xl">
      <BigPost :postData="headBigPost" />
      <BaseBr />
      <div class="grid grid-cols-2 gap-5">
        <NormPost
          v-for="(item, index) in oneNormPost"
          :key="index"
          :postData="item"
        />
      </div>
    </div>
    <div class="w-[32%] h-auto bg-white rounded-2xl p-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between">
          <startSection class="w-4 h-4 text-[#1D3068] cursor-pointer" />
          <p class="text-lg font-semibold ml-1 text-[#1D3068]">
            Сўнгги янгиликлар
          </p>
        </div>
        <arrowRight class="w-5 h-5 cursor-pointer" />
      </div>
      <BaseBr />
      <div v-for="(item, index) in smallPosts">
        <SmallPost :post-data="item"/>
        <BaseBr />
      </div>
    </div>
  </div>
</template>
