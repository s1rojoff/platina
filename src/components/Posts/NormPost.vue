<script setup lang="ts">
import { PropType } from 'vue';
interface Post{
    url: string,
    text: string,
    type: string,
    date: string
}
const props = defineProps({
    postData:{
        type:Object as PropType<Post>,
        default: {}
    },
    imgSize:{
      type: String as PropType<string>,
      default: 'w-full'
    },
    dataType:{
      type: Boolean as PropType<boolean>,
        default : true
    }
})
</script>
<template>
  <div class="p-0.5">
    <img :src="postData.url" :class="imgSize" alt="" />
    <p class="h-16 text-base text-[#1D3068] font-bold leading-5 mt-3">{{ postData.text }}</p>
    <div class="pt-2 flex justify-start items-center" v-if="dataType">
        <p class="text-[#003096] text-sm font-medium">{{ postData.type }}</p>
        <p class="text-[#A9AABC] text-sm font-medium ml-5">{{ postData.date }}</p>
    </div>
  </div>
</template>
