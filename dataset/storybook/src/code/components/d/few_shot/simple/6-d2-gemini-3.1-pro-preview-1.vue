<template>
  <div class="bg-white p-6">
    <div class="flex w-80 flex-col gap-3">
      <ProgressBar :value="25" />
      <Tag
        severity="info"
        rounded
        value="Datei wird hochgeladen..."
        class="w-fit font-light"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>