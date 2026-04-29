<template>
  <div class="flex w-80 flex-col gap-3">
    <ProgressBar :value="25" show-value />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
</script>
