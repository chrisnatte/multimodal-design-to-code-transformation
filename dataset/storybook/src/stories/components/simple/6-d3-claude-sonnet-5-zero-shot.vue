<template>
  <div class="flex flex-col gap-3 w-80">
    <ProgressBar :value="progressValue" class="h-[17.5px]" />
    <Tag severity="info" rounded value="Datei wird hochgeladen..." class="w-fit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>