<template>
  <div class="flex flex-col gap-6">
    <InputTextarea
      v-model="form.feedback"
      placeholder="Feedback eingeben..."
      class="w-full"
      :invalid="false"
      :disabled="false"
      variant="filled"
      rows="4"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="form.anonymous" binary inputId="anonymous" />
      <label for="anonymous">Anonym senden</label>
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
import InputTextarea from 'primevue/inputtextarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  feedback: '',
  anonymous: false
})
</script>