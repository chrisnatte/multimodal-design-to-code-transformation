<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-3 w-[320px]">
      <ProgressBar :value="uploadProgress" />
      <Tag 
        severity="info" 
        rounded 
        value="Datei wird hochgeladen..." 
        class="self-start"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const uploadProgress = ref(25);
</script>