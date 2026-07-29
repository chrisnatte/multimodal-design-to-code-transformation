<template>
  <div class="bg-white p-6 inline-block">
    <div class="flex flex-col gap-3 w-80">
      <ProgressBar :value="progressValue" />
      <Tag :value="tagText" severity="info" :rounded="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
const tagText = ref('Datei wird hochgeladen...');
</script>