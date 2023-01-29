<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs()
</script>

<template>
    <button v-bind="attrs" class="bg-[#34AADF] flex items-center justify-center py-2 px-5 rounded-lg text-white"><slot></slot></button>
</template>