<script setup lang="ts">
import { PropType } from "vue";
import search from "../icons/search.vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String as PropType<string>,
  },
});
</script>
<template>
  <div class="reative flex items-center">
    <search class="w-5 h-5 absolute ml-3" />
    <input
      type="search"
      class="px-10 w-full py-2.5 focus:outline-blue-600 bg-[#F8F8FF] rounded-lg placeholder:text-[#737C98] outline-none"
      placeholder="Сайт бўйлаб қидирув..."
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>
