<script setup lang="ts">
import startSection from "../components/icons/startSection.vue";
import ArrowRight from "../components/icons/arrowRight.vue";
import BaseBr from "../components/BaseBr.vue";
import MiddlePost from "../components/Posts/MiddlePost.vue";
import { Post } from "../helper/interface";
import BaseBtn from '../components/BaseBtn/index.vue'
import { ref } from "vue";
const midPosts = ref<Post[]>([
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
    {
        url: '/images/secFive1.png',
        text: 'Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди',
        type: 'Жамият',
        date: '2 кун олдин'
    },
])
</script>
<template>
  <div class="w-full flex items-start justify-between pb-10">
    <div class="mr-5 w-[68%] bg-white p-5 rounded-2xl">
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
      <div v-for="(item, index) in midPosts" :key="index">
        <MiddlePost :post-data="item"/>
        <BaseBr/>
      </div>
      <BaseBtn class="w-full bg-[#F8F8FF]"><p class="text-[#1D3068] text-[17px] font-normal">Яна юклаш</p></BaseBtn>
    </div>
    <div class="w-[32%] h-auto bg-white rounded-2xl p-5">
    <div class="h-[600px] bg-[#D9D9D9] rounded-lg"> </div>
    </div>
  </div>
</template>
