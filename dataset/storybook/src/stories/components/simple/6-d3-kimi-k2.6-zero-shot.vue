<template>
  <div class="flex flex-col gap-3 w-80">
    <ProgressBar :value="progressValue" class="w-full" />
    <Tag severity="info" rounded :value="tagText" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
const tagText = ref('Datei wird hochgeladen...');
</script>