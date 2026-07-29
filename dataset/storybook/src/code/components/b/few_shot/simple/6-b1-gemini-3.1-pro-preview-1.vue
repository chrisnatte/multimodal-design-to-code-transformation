<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-3 w-80">
      <ProgressBar :value="uploadProgress" />
      <Tag severity="info" rounded value="Datei wird hochgeladen..." class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const uploadProgress = ref(25)
</script>