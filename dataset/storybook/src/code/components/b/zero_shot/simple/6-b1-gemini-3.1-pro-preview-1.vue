<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-col gap-3 w-[320px]">
      <ProgressBar :value="25" />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded class="self-start" />
    </div>
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
</script>