<template>
  <div class="flex w-96 flex-col gap-3 p-6">
    <ProgressBar :value="25" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>