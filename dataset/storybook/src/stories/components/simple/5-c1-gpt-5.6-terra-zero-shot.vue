<template>
  <div class="flex w-[304px] flex-col gap-6 p-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="4"
      class="w-full"
    />

    <div class="flex items-center gap-2">
      <Checkbox
        v-model="anonymous"
        inputId="anonymous"
        binary
      />
      <label for="anonymous" class="text-sm text-surface-700">
        Anonym senden
      </label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="self-start"
      @click="submitFeedback"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const anonymous = ref(false)

const submitFeedback = () => {
  // Submit feedback
}
</script>