<template>
  <div class="flex flex-col gap-2 p-4 w-96">
    <ProgressBar :value="progressValue" style="height: 1.5rem"></ProgressBar>
    <Tag severity="info" style="background: #dbeafe; color: #1e3a8a" class="w-fit">
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