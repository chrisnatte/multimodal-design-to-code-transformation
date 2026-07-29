<template>
  <div class="flex w-full max-w-sm flex-col gap-4 p-4">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="4"
      class="w-full resize-none"
    />
    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" input-id="anonymous" binary />
      <label for="anonymous" class="text-slate-700">Anonym senden</label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      icon-pos="right"
      severity="primary"
      class="w-fit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const isAnonymous = ref(false)
</script>