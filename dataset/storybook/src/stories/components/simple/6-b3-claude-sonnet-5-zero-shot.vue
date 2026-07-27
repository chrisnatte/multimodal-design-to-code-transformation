<template>
  <div class="flex flex-col gap-3 w-[320px]">
    <ProgressBar :value="progressValue">{{ progressValue }}%</ProgressBar>
    <Tag :value="tagText" severity="info" :rounded="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
const tagText = ref('Datei wird hochgeladen...');
</script>