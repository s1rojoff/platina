<script setup lang="ts">
import { PropType } from "vue";
import { Post } from "../../helper/interface";
const props = defineProps({
  postData: {
    type: Object as PropType<Post>,
    default: {},
  },
  imgSize: {
    type: String as PropType<string>,
    default: "w-full",
  },
  dataType: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
});
</script>
<template>
  <div class="p-0.5">
    <img :src="postData.url" :class="imgSize" alt="" />
    <p class="h-16 text-base text-[#1D3068] font-bold leading-5 mt-3">
      {{ postData.text }}
    </p>
    <div class="pt-2 flex justify-start items-center" v-if="dataType">
      <p
        class="text-sm font-medium"
        :class="{
          'text-[#FF7D25]': postData.type == 'Жамият',
          'text-[#003096]': postData.type == 'Жаҳон',
          'text-[#2DA85B]': postData.type == 'Ўзбекистон',
          'text-[#E50029]': postData.type == 'Спорт',
        }"
      >
        {{ postData.type }}
      </p>
      <p class="text-[#A9AABC] text-sm font-medium ml-5">{{ postData.date }}</p>
    </div>
  </div>
</template>
