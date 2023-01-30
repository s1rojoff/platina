<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs()
</script>

<template>
    <button v-bind="attrs" class="flex items-center justify-center py-2 px-5 rounded-lg"><slot></slot></button>
</template>