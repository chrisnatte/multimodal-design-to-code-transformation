<template>
  <div class="flex flex-col gap-2 p-4 max-w-md">
    <ProgressBar :value="progressValue" />
    <Tag value="Datei wird hochgeladen..." severity="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>