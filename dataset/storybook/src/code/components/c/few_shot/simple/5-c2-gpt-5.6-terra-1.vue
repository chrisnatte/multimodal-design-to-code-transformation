<template>
  <div class="flex w-[304px] flex-col p-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="3"
      variant="filled"
      class="h-[84px] w-full resize-none text-sm"
      aria-label="Feedback"
    />

    <div class="mt-6 flex items-center gap-2">
      <Checkbox v-model="sendAnonymously" input-id="anonymous" binary />
      <label for="anonymous" class="text-sm">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      severity="success"
      size="small"
      class="mt-6 w-fit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const sendAnonymously = ref(false)
</script>