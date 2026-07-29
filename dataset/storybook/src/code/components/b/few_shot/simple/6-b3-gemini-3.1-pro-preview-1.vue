<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex w-[320px] flex-col gap-3">
      <ProgressBar :value="25" />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>