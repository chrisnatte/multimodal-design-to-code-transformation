<template>
  <div class="flex flex-col gap-3 p-4 w-full max-w-[400px]">
    <ProgressBar :value="progressValue" :pt="{ value: { class: 'bg-emerald-500' } }" />
    <div class="flex justify-start">
      <Tag severity="info" value="Datei wird hochgeladen..." />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>