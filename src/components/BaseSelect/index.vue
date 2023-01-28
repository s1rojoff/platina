<script setup lang="ts">import { PropType } from 'vue';

const props = defineProps({
    lang:{
        type: Array as PropType<any[]>
    }
})
</script>

<template>
    <select class="py-2.5 pl-5 pr-3 outline-none rounded-lg bg-[#F8F8FF]">
        <option class="bg-slate-100" v-for="(item, index) in lang" :value="item.lang">{{ item.name }}</option>
    </select>
</template>