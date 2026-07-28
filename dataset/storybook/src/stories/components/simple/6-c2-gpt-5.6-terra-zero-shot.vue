<template>
  <div class="flex w-96 flex-col gap-3 p-6">
    <ProgressBar :value="progress" class="w-full" />

    <Tag value="Datei wird hochgeladen..." severity="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progress = ref(25);
</script>