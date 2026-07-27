<template>
  <div class="flex flex-col gap-6 w-64">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="3"
      class="w-full"
    />
    <div class="flex items-center gap-2 w-fit">
      <Checkbox
        v-model="anonym"
        inputId="anonym"
        :binary="true"
      />
      <label for="anonym">Anonym senden</label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="primary"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const anonym = ref(false)
</script>