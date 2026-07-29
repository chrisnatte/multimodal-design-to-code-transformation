<template>
  <div class="flex w-fit flex-col gap-3 bg-white p-6">
    <ProgressBar :value="25" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>