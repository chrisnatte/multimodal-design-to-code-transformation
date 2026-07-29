<template>
  <div class="flex flex-col gap-4 p-6 w-full max-w-sm">
    <ProgressBar :value="25" />
    <Tag value="Datei wird hochgeladen..." severity="info" class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>