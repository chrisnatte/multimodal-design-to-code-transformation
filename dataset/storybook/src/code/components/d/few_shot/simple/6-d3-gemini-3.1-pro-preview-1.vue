<template>
  <div class="bg-white p-6 inline-block">
    <div class="flex flex-col gap-3 w-[320px]">
      <ProgressBar :value="25" />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded class="w-fit font-light" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>