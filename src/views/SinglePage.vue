<script setup lang="ts">
import MavzugaOid from "./MavzugaOid.vue";
import SectionSix from "./SectionSix.vue";
import eye from "../components/icons/eye.vue";
import share from "../components/icons/share.vue";
import arrowRight from "../components/icons/arrowRight.vue";
import arrowLeft from "../components/icons/arrowLeft.vue";
</script>
<template>
  <div
    class="w-full bg-[rgb(248,248,255)] px-32 flex items-start justify-between py-10"
  >
    <div class="mr-5 w-[68%] bg-white p-5 rounded-2xl">
      <p class="text-3xl font-bold text-[#1D3068]">
        Кечадан ўқиш бошланган мактабларда иссиқлик талабга жавоб берадими?
      </p>
      <p class="text-[17px] font-normal mt-3 text-[#1D3068]">
        Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11 январдан
        кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги ҳаво ҳарорати эса
        сўнгги йиллардаги айни шу мавсум кўрсаткичидан анча юқори.
      </p>
      <div class="flex justify-between items-center">
        <div class="pt-2 flex justify-start items-center">
          <p class="text-sm text-[#FF7D25] font-medium">Жамият</p>
          <p class="text-[#A9AABC] text-sm font-medium ml-5">2 январь, 11:12</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex justify-start items-center mr-5">
            <eye />
            <p class="text-sm font-medium text-[#A9AABC] ml-0.5">15879</p>
          </div>
          <div class="flex justify-between items-center">
            <share />
            <p class="text-sm font-medium text-[#A9AABC] ml-0.5">Улашиш</p>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <img src="/images/school.png" alt="" />
      </div>
      <p class="text-start text-base font-medium text-[#A9AABC] mt-1">
        Фото: Platina.uz
      </p>
      <p class="text-[17px] text-[#1D3068] mt-5">
        Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11 январдан
        кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги ҳаво ҳарорати эса
        сўнгги йиллардаги айни шу мавсум кўрсаткичидан анча юқори. Яъни
        “Ўзгидромет”нинг тақдим этган маълумотига кўра, 12-15 январда республика
        бўйича аномал совуқ об-ҳаво бўлиши кутилмоқда. Хўш, бундай совуқ
        ҳароратда 11 январдан ўқиш жараёнлари бошланган мактабларда иссиқлик
        талаблари қандай бўлиши керак? Санитария-эпидемиология хизмати ана шу
        талабларни эслатиб ўтди:
        <br />
        <br />
        • Таълим муассасаларининг ўқув хоналарида ҳаво ҳарорати 16º С дан паст
        бўлмаслиги керак • Таълим муассасаларининг ўқув хоналарида машғулотлар
        ўтказишда меҳнатни муҳофаза қилиш талабларига мувофиқ ўқув хоналарида
        ҳаво ҳарорати енгил жисмоний ишда 21º С, ўртача оғир ишда 17º С ва оғир
        ишда 16º С дан паст бўлмаслиги керак. <br />
        • Физика ўқув лаборатория хонасида мунтазам равишда ҳарорат 18º С – 21º
        С, ҳавонинг намлиги 40 – 60 фоиз бўлиши керак. <br />
        • Таълим муассасаси ҳудудидаги ҳожатхоналар иссиқ сув ва канализация
        тизимига уланган бўлиши лозим. <br />
        • Таълим муассасасида канализация тизими йўқ бўлганда давлат санитария
        назорати органлари билан келишилган ҳолда таълим муассасасида ер
        қатламини ифлослантирмаган ҳолда душхоналардан ва юз-қўл ювгичлардан сув
        оқмайдиган қурилмали ахлат ўраларининг мавжуд бўлишига рухсат этилади.
        <br />
        • Информатика ўқув хонасини ертўлаларда жойлаштириш тақиқланади. <br />
        • Ўқув устахоналаридаги иш ўрни ҳар қандай бахтсиз ҳодисанинг олдини
        олишга қаратилган ҳолда ташкил қилинган бўлиши керак. <br />
        • Хўш, кечадан дарс ўтилаётган мактаблардаги иссиқлик шу талабларга
        жавоб берадими?
      </p>
      <div class="flex justify-between items-center mt-3">
        <div class="pt-2 flex justify-start items-center">
          <p
            class="text-sm text-[#1D3068] rounded-md py-1 px-2 bg-[#F8F8FF] font-medium"
          >
            # Мактаб
          </p>
          <p
            class="text-sm text-[#1D3068] rounded-md py-1 px-2 bg-[#F8F8FF] font-medium ml-1.5"
          >
            # Иссиқлик
          </p>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex justify-start items-center mr-5">
            <eye />
            <p class="text-sm font-medium text-[#A9AABC] ml-0.5">15879</p>
          </div>
          <div class="flex justify-between items-center">
            <share />
            <p class="text-sm font-medium text-[#A9AABC] ml-0.5">Улашиш</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[32%] h-auto bg-white rounded-2xl p-5">
      <div class="h-[600px] bg-[#D9D9D9] rounded-lg"></div>
    </div>
  </div>
  <div class="w-full bg-[rgb(248,248,255)] px-32">
    <div class="w-[68%] grid grid-cols-2 gap-4 rounded-2xl">
      <div class="bg-white rounded-xl p-5 flex items-center">
        <div>
          <p class="text-[17px] font-bold text-[#1D3068]">
            Президент бошқарув тузилмасида ўзгариш бўлди: янги тайинловлар ва...
          </p>
          <router-link to="/"
            ><p
              class="text-sm text-[#1D3068] flex items-center rounded-md mr-14 mt-2 py-1 px-2 bg-[#F8F8FF] font-medium"
            >
              <arrowLeft />&nbsp; Аввалги янгилик
            </p></router-link
          >
        </div>
        <img src="../../public/images/matbuot.png" alt="" />
      </div>
      <div class="bg-white rounded-xl p-5 flex items-center">
        <div>
          <p class="text-[17px] font-bold text-[#1D3068]">
            Президент бошқарув тузилмасида ўзгариш бўлди: янги тайинловлар ва...
          </p>
          <router-link to="/"><p
            class="text-sm text-[#1D3068] flex items-center rounded-md mr-14 mt-2 py-1 px-2 bg-[#F8F8FF] font-medium"
          >
            Аввалги янгилик &nbsp;<arrowRight />
          </p></router-link>
        </div>
        <img src="../../public/images/matbuot.png" alt="" />
      </div>
      <div></div>
    </div>
  </div>
  <div class="bg-[rgb(248,248,255)] px-32 pb-10">
    <MavzugaOid />
  </div>
  <div class="bg-[rgb(248,248,255)] px-32 pb-10">
    <SectionSix />
  </div>
</template>
