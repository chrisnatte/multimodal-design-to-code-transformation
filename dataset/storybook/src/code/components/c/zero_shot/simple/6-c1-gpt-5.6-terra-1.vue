<template>
  <div class="flex w-96 flex-col gap-3 p-6">
    <ProgressBar :value="progress" :showValue="true" class="h-[18px]" />
    <Button
      label="Datei wird hochgeladen..."
      severity="info"
      size="small"
      :disabled="true"
      class="w-fit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'

const progress = ref(25)
</script>