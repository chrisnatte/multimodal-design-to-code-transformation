<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="state.progressValue" :showValue="state.progressShowValue" />
    <Tag :value="state.tagText" severity="info" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const state = reactive({
  progressValue: 25,
  progressShowValue: true,
  tagText: 'Datei wird hochgeladen...'
})
</script>