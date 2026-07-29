<template>
  <div class="flex w-[368px] flex-col bg-white p-6">
    <div class="flex w-[320px] flex-col gap-3">
      <ProgressBar :value="uploadProgress" class="h-[18px] w-full" />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded class="w-fit" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>