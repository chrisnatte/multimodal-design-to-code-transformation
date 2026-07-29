<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex flex-col gap-3 w-80">
      <ProgressBar :value="uploadValue" :showValue="true"></ProgressBar>
      <Tag value="Datei wird hochgeladen..." severity="info" :rounded="true"></Tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const uploadValue = ref(25);
</script>