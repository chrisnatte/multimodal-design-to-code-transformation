<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="state.progressValue">{{ state.progressText }}</ProgressBar>
    <Tag :value="state.tagText" severity="info" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const state = reactive({
  progressValue: 25,
  progressText: '25%',
  tagText: 'Datei wird hochgeladen...'
});
</script>