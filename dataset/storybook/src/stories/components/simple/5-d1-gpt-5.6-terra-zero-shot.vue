<template>
  <div class="flex w-64 flex-col gap-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="3"
      class="w-full"
      fluid
    />

    <div class="flex items-center">
      <Checkbox v-model="anonymous" inputId="anonymous" binary />
      <label for="anonymous" class="ml-2 text-sm">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="self-start"
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
</script>