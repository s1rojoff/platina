<script setup lang="ts">
import telegramfoter from "../components/icons/telegramfoter.vue";
import instagram from "../components/icons/instagram.vue";
import facebook from "../components/icons/facebook.vue";
import youtube from "../components/icons/youtube.vue";
import twitter from "../components/icons/twitter.vue";
import tiktok from "../components/icons/tiktok.vue";
import BaseBr from "../components/BaseBr.vue";
import redmedia from "../components/icons/redmedi.vue";
</script>
<template>
  <div class="py-7">
    <div class="flex items-center justify-start">
      <img src="/images/logo.png" alt="logo" />
      <ul class="flex justify-start items-center">
        <li class="text-[#1D3068] font-medium ml-14 text-[17px]">
          Сайт ҳақида
        </li>
        <li class="text-[#1D3068] font-medium ml-14 text-[17px]">Реклама</li>
        <li class="text-[#1D3068] font-medium ml-14 text-[17px]">
          Маҳфийлик сиёсати
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-3 gap-10 mt-7">
      <p class="text-sm text-[#737C98] font-normal">
        © 2023 Platina.uz. Барча ҳуқуқлар ҳимояланган. «Platina.uz» сайтида
        жойланган маълумотлар муаллифнинг шахсий фикри. Сайтда жойланган ҳар
        қандай материалларни ёзма рухсатсиз фойдаланиш таъқиқланади.
      </p>
      <p class="text-sm text-[#737C98] font-normal">
        Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги Ахборот ва
        оммавий коммуникациялар агентлиги томонидан 02.12.2022 санасида №051412
        сонли гувоҳнома билан ОАВ сифатида рўйхатга олинган
      </p>
      <p class="text-sm text-[#737C98] font-normal">
        Агарда хатолик топсангиз матннинг бир қисмини белгилаб Ctrl+Enter
        тугмаларини босинг
      </p>
    </div>
    <BaseBr class="mt-5"/>
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-start">
        <telegramfoter />
        <instagram />
        <facebook />
        <youtube />
        <twitter />
        <tiktok />
      </div>
      <div class="flex items-center justify-start">
        <redmedia />
        <p class="font-normal text-sm text-[#737C98] ml-2">
          IT-компанияси томонидан ишлаб чиқилди
        </p>
      </div>
      <div class="bg-[#F8F8FF] p-4 rounded-lg">
        <p class="text-[#737C98] text-xs font-semibold">18+</p>
      </div>
    </div>
  </div>
</template>
