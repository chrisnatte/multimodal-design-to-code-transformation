<template>
  <div class="flex flex-col gap-4 p-4 max-w-sm">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="5"
      class="w-full"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" binary inputId="anonym" />
      <label for="anonym" class="text-sm text-gray-700">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="w-max"
      severity="success"
      @click="submitFeedback"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const anonymous = ref(false)

const submitFeedback = () => {
  console.log('Feedback:', feedback.value, 'Anonym:', anonymous.value)
}
</script>