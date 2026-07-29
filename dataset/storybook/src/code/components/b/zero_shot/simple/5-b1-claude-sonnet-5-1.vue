<template>
  <div class="bg-white p-6 inline-block">
    <div class="flex flex-col gap-6 w-64">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        class="w-full"
        rows="4"
      />
      <div class="flex items-center gap-2">
        <Checkbox
          v-model="anonymSenden"
          inputId="anonymSenden"
          binary
        />
        <label for="anonymSenden" class="text-sm">Anonym senden</label>
      </div>
      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        severity="primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const anonymSenden = ref(false)
</script>