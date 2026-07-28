<template>
  <div class="flex flex-col gap-3 p-6">
    <ProgressBar :value="progress" :showValue="true" class="h-[18px] w-full" />
    <Message severity="info" :closable="false" class="w-fit">
      Datei wird hochgeladen...
    </Message>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Message from 'primevue/message'

const progress = ref(25)
</script>