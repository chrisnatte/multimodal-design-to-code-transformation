<template>
  <div class="flex w-[304px] flex-col gap-6 p-6 bg-white">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="3"
      class="w-full resize-none"
    />
    
    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" inputId="anonymous" binary />
      <label for="anonymous" class="text-sm text-slate-700 cursor-pointer">
        Anonym senden
      </label>
    </div>
    
    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="primary"
      class="w-fit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const isAnonymous = ref(false)
</script>