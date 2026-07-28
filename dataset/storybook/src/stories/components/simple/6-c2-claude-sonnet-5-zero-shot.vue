<template>
  <div class="flex flex-col gap-3 p-4 w-full max-w-md">
    <ProgressBar :value="progressValue" class="h-6"></ProgressBar>
    <Tag severity="info" class="bg-blue-50 text-blue-500 font-normal">
      Datei wird hochgeladen...
    </Tag>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>