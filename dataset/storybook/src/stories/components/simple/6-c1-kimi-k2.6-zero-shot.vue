<template>
  <div class="flex flex-col gap-2 p-4 w-80">
    <ProgressBar :value="progressValue" :showValue="true" class="h-5" />
    <Tag :value="statusText" severity="info" class="text-sm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const progressValue = ref(25)
const statusText = ref('Datei wird hochgeladen...')
</script>