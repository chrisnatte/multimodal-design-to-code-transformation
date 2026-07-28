<template>
  <div class="flex w-80 flex-col gap-3">
    <ProgressBar
      :value="uploadProgress"
      :showValue="true"
      class="w-full"
    >
      {{ uploadProgress }}%
    </ProgressBar>

    <Tag
      value="Datei wird hochgeladen..."
      severity="info"
      rounded
      class="self-start"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const uploadProgress = ref(25);
</script>