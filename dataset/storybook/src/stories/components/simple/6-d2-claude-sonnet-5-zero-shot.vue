<template>
  <div class="flex flex-col gap-3" style="width: 320px">
    <ProgressBar :value="progressValue" style="height: 17.5px"></ProgressBar>
    <Tag severity="info" rounded value="Datei wird hochgeladen..."></Tag>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>