<template>
  <div class="flex flex-col gap-3 w-80">
    <ProgressBar :value="progressValue" class="w-full" />
    <div class="w-40">
      <Tag :value="tagText" severity="info" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const progressValue = ref(25)
const tagText = ref('Datei wird hochgeladen...')
</script>