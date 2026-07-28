<template>
  <div class="flex flex-col gap-4 p-6 max-w-sm">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      autoResize
      rows="3"
      class="w-full"
    />
    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" inputId="anonymous" :binary="true" />
      <label for="anonymous" class="text-gray-700 cursor-pointer">Anonym senden</label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      severity="success"
      class="w-fit"
      @click="handleSubmit"
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

const handleSubmit = () => {
  console.log('Feedback:', feedback.value)
  console.log('Anonymous:', isAnonymous.value)
}
</script>