<script setup lang="ts">
import BaseBtn from "../BaseBtn/index.vue";
import telegram from "../icons/telegram.vue";
import BaseInput from "../BaseInput/index.vue";
import BaseSelect from "../BaseSelect/index.vue";
import down from '../icons/down.vue'
import sun from  '../icons/sun.vue'
const languages = [
  {
    name: "Ўзбекча",
    lang: "уз",
  },
  {
    name: "O'zbekcha",
    lang: "uz",
  },
  {
    name: "Русский",
    lang: "ru",
  },
  {
    name: "English",
    lang: "en",
  },
];
const navbars = ["Ўзбекистон", "Жаҳон", "Жамият", "Таҳлил", "Спорт", "Медиа"];
</script>
<template>
  <div class="bg-white pb-4">
    <img src="../../assets/images/ads.png" class="h-40 w-full" alt="" />
    <div id="navbar" class="flex items-center justify-between w-full pt-7">
      <div class="w-[70%] flex justify-start">
        <img src="../../assets/images/logo.png" class="" alt="logo" />
        <BaseInput class="w-[70%] ml-8" />
      </div>
      <div class="w-[30%] flex justify-end items-center">
        <BaseBtn><telegram />&nbsp;@platinauzb</BaseBtn>
        <BaseSelect class="ml-8" :lang="languages" />
      </div>
    </div>
    <div class="w-full flex items-center justify-between mt-5">
      <ul class="flex items-center">
        <li class="ml-8 first:ml-0 font-semibold text-lg" v-for="(item, index) in navbars">{{ item }}</li>
      </ul>
      <div class="flex items-center font-semibold">
          <div class="flex items-center mr-10">
            <sun/>
            <p class="ml-1 text-lg">+9 °C</p>
          </div>
          <div class="flex items-center ml-10">
            <img src="../../assets/images/USD.png"  class="w-5 h-5 rounded-full" alt="">
            <p class="ml-2 text-lg mr-1">USD <span class="text-red-500">11318.74</span></p>
            <down/>
          </div>
      </div>
    </div>
  </div>
</template>
