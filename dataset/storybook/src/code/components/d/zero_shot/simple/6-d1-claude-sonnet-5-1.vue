<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex flex-col gap-3 w-80">
      <ProgressBar :value="progressValue" style="height: 17.5px" />
      <Tag severity="info" rounded>
        <span class="font-light text-xs">Datei wird hochgeladen...</span>
      </Tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const progressValue = ref(25)
</script>