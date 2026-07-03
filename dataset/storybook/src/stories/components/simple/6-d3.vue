<template>
  <div class="w-[384px] bg-[#eeeeee] p-6">
    <div class="flex flex-col gap-3">
      <ProgressBar
        :value="state.progress"
        :showValue="true"
        class="h-[18px]"
      />
      <Tag
        :value="state.message"
        severity="info"
        rounded
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const state = reactive({
  progress: 25,
  message: 'Datei wird hochgeladen...'
})
</script>