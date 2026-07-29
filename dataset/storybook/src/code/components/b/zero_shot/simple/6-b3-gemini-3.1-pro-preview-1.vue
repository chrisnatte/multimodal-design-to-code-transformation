<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-col gap-3 w-[320px]">
      <ProgressBar :value="25" />
      <Tag severity="info" rounded value="Datei wird hochgeladen..." class="w-fit" />
    </div>
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
</script>