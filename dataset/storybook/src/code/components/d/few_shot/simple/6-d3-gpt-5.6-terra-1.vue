<template>
  <div class="flex w-[368px] flex-col p-6">
    <div class="flex w-full flex-col gap-3">
      <ProgressBar
        :value="uploadProgress"
        :show-value="true"
        class="w-full !h-[18px]"
        :pt="{
          value: 'flex items-center justify-center',
          label: 'text-[11px] font-semibold',
        }"
      />
      <Tag value="Datei wird hochgeladen..." severity="info" rounded class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>