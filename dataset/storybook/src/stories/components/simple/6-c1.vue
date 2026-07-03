<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="w-full max-w-md flex flex-col gap-4">
      <ProgressBar :value="state.progress" :showValue="true" />
      <Button
        :label="state.uploadLabel"
        severity="info"
        text
        rounded
        disabled
        class="self-start"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const state = reactive({
  progress: 25,
  uploadLabel: 'Datei wird hochgeladen...'
})
</script>