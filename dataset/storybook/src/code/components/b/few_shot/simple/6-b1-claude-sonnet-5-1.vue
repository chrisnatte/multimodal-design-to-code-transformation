<template>
  <div class="flex w-[368px] flex-col bg-white p-6">
    <div class="flex w-80 flex-col gap-3">
      <ProgressBar :value="25" />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>