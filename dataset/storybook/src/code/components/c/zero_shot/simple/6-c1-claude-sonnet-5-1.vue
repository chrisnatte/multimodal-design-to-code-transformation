<template>
  <div class="flex flex-col gap-2 p-4 w-full max-w-md">
    <ProgressBar :value="progress" class="h-6"></ProgressBar>
    <Message severity="info" :closable="false">Datei wird hochgeladen...</Message>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Message from 'primevue/message'

const progress = ref(25)
</script>