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
  <div class="flex items-center">
    <div>
      <p class="text-[15px] font-bold text-[#1D3068]">
        {{ postData.text }}
      </p>
      <div class="pt-3 flex justify-start items-center">
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
    <img :src="postData.url" class="rounded-lg ml-1.5 w-20 h-20" alt="" />
  </div>
</template>
