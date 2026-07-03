<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="state.progressValue" />
    <Tag
      :value="state.tagText"
      severity="info"
      :rounded="true"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const state = reactive({
  progressValue: 25,
  tagText: 'Datei wird hochgeladen...'
})
</script>