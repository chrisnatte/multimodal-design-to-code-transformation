<template>
  <div class="flex flex-col gap-4 p-6 w-full max-w-md">
    <ProgressBar :value="25" />
    <Tag severity="info" value="Datei wird hochgeladen..." class="self-start" />
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
</script>