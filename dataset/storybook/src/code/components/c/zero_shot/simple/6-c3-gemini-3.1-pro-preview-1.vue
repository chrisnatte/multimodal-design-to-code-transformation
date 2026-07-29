<template>
  <div class="flex flex-col items-start gap-4 p-6 w-full max-w-md">
    <ProgressBar :value="progressValue" class="w-full" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>