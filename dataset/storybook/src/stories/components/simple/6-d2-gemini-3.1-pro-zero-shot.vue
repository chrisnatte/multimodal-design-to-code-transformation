<template>
  <div class="flex flex-col gap-3 w-[320px]">
    <ProgressBar :value="progressValue" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded class="self-start" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>