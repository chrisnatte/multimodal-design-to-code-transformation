<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="form.progressValue" />
    <Tag :value="form.tagText" severity="info" :rounded="true" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const form = reactive({
  progressValue: 25,
  tagText: 'Datei wird hochgeladen...'
})
</script>