<template>
  <div class="flex flex-col gap-3 w-[320px]">
    <ProgressBar :value="progressValue" />
    <Tag
      severity="info"
      rounded
      value="Datei wird hochgeladen..."
      class="self-start font-light text-sm"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>