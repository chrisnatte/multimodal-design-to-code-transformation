<template>
  <div class="flex w-full max-w-sm flex-col gap-3 p-4">
    <ProgressBar :value="progressValue" />
    <Tag value="Datei wird hochgeladen..." severity="info" class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'

  const progressValue = ref(25)
</script>