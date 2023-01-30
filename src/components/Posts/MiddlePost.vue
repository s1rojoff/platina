<script setup lang="ts">
import { PropType } from "vue";
import { Post } from "../../helper/interface";
const props = defineProps({
  postData: {
    type: Object as PropType<Post>,
    default: {},
  },
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-3">
      <p class="font-bold text-lg text-[#1D3068]">
        {{ postData.text }}
      </p>
      <div class="pt-2 flex justify-start items-center">
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
        <p class="text-[#A9AABC] text-sm font-medium ml-5">
          {{ postData.date }}
        </p>
      </div>
    </div>
    <div class="col-span-1">
      <img :src="postData.url" alt="" />
    </div>
  </div>
</template>
