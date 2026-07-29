<template>
  <div class="flex w-sm flex-col gap-2 p-4">
    <ProgressBar :value="25" />
    <Tag value="Datei wird hochgeladen..." severity="info" />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>