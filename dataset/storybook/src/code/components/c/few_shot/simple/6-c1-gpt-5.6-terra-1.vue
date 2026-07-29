<template>
  <div class="flex w-[336px] flex-col gap-3">
    <ProgressBar
      :value="uploadProgress"
      :pt="{
        root: 'h-4 overflow-hidden rounded-md bg-slate-200',
        value: 'bg-emerald-500',
        label: 'text-[10px] font-medium text-white',
      }"
    />
    <Tag value="Datei wird hochgeladen..." severity="info" class="w-fit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>