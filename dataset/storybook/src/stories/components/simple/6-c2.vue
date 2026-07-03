<template>
  <div class="w-full min-h-screen bg-gray-100 p-6">
    <div class="w-full max-w-md flex flex-col gap-4">
      <ProgressBar :value="state.progress" :showValue="true" />
      <Tag :value="state.statusText" severity="info" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const state = reactive({
  progress: 25,
  statusText: 'Datei wird hochgeladen...'
});
</script>