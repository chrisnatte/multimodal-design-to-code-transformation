<template>
  <div class="flex flex-col gap-6">
    <Textarea
      v-model="state.feedback"
      placeholder="Feedback eingeben..."
      class="w-full"
      variant="filled"
      :rows="4"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="state.anonymous" inputId="anonymous" binary />
      <label for="anonymous" class="text-sm">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="primary"
      :disabled="false"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const state = reactive({
  feedback: '',
  anonymous: false
})
</script>