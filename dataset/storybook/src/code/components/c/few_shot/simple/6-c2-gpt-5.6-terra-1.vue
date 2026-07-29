<template>
  <div class="flex flex-col gap-3 p-6">
    <ProgressBar
      :value="uploadProgress"
      aria-label="Upload-Fortschritt"
      class="h-[18px] w-84"
      :pt="{
        label: 'text-xs',
      }"
    />
    <Tag value="Datei wird hochgeladen..." severity="info" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>