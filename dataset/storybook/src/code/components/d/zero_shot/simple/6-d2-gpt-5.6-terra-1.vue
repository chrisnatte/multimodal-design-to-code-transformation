<template>
  <div class="flex w-[368px] flex-col bg-white p-6">
    <div class="flex w-[320px] flex-col gap-3">
      <ProgressBar
        :value="uploadProgress"
        aria-label="Upload-Fortschritt"
        class="h-[18px] w-full"
        :pt="{
          root: { class: 'h-[18px] bg-[#e2e8f0] rounded-md' },
          value: { class: 'bg-[#10b981] rounded-l-md' },
          label: { class: 'text-[10.5px] font-semibold text-white' }
        }"
      />
      <Tag
        value="Datei wird hochgeladen..."
        severity="info"
        rounded
        class="w-fit text-[12.25px] font-light"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>