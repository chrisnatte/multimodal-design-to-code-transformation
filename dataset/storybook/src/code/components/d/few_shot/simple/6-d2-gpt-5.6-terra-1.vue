<template>
  <div class="flex w-[368px] flex-col p-6">
    <div class="flex w-full flex-col gap-3">
      <ProgressBar :value="25" aria-label="Upload-Fortschritt" />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>