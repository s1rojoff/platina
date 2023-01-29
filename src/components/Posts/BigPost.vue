<script setup lang="ts">import { PropType } from 'vue';
import { Post } from '../../helper/interface';
const props = defineProps({
    postData:{
        type:Object as PropType<Post>,
        default: {}
    },
    typeData:{
      type: String as PropType<string>,
        default: ''
    }
})
</script>

<template>
  <div>
    <img :src="postData.url" class="w-full" alt="error" />
    <p class="text-3xl font-bold text-[#1D3068] mt-5">
      {{ postData.text }}
    </p>
    <p class="font-normal text-[17px] text-[#485680] mt-2.5">
      {{ postData.subtext }}
    </p>
    <div class="flex items-center justify-start mt-5" :class="typeData">
      <p class="text-[#FF7D25] text-sm cursor-pointer">{{ postData.type }}</p>
      <p class="font-medium text-sm text-[#A9AABC] ml-5">{{ postData.date }}</p>
    </div>
  </div>
</template>
