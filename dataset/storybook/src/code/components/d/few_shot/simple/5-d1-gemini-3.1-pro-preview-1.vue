<template>
  <div class="flex w-full max-w-[304px] flex-col gap-6 p-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="3"
      class="w-full resize-none"
    />
    
    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" input-id="anonymous" binary />
      <label for="anonymous" class="text-sm text-slate-700 cursor-pointer">
        Anonym senden
      </label>
    </div>
    
    <Button
      label="Absenden"
      icon="pi pi-check"
      icon-pos="right"
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