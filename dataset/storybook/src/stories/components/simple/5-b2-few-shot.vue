<template>
  <div class="flex flex-col gap-6">
    <Textarea
      v-model="form.feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="4"
      fluid
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="form.anonymous" binary />
      <span>Anonym senden</span>
    </div>

    <Button label="Absenden" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  feedback: '',
  anonymous: false
})
</script>