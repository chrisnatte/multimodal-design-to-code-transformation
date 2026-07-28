<template>
  <div class="flex w-80 flex-col gap-3">
    <ProgressBar :value="uploadProgress" class="h-[17.5px]" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>