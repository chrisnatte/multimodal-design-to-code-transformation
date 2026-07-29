<template>
  <div class="flex w-[368px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-3">
      <ProgressBar
        :value="uploadProgress"
        :showValue="true"
        aria-label="Datei-Upload-Fortschritt"
        class="w-full"
      />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const uploadProgress = ref(25);
</script>