<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="state.progressValue" :showValue="state.showProgressValue" />
    <Tag
      :value="state.tagText"
      severity="info"
      :rounded="state.tagRounded"
      :icon="state.showTagIcon ? 'pi pi-info-circle' : undefined"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const state = reactive({
  progressValue: 25,
  showProgressValue: true,
  tagText: 'Datei wird hochgeladen...',
  showTagIcon: false,
  tagRounded: true
})
</script>