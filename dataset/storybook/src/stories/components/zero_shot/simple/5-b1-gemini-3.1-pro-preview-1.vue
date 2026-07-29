<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-6 w-64">
      <Textarea
        v-model="feedbackText"
        placeholder="Feedback eingeben..."
        variant="filled"
        class="w-full"
        rows="4"
      />
      
      <div class="flex items-center gap-2">
        <Checkbox
          v-model="isAnonymous"
          inputId="anonymous"
          :binary="true"
        />
        <label for="anonymous" class="font-sans text-sm font-normal text-surface-700 cursor-pointer">
          Anonym senden
        </label>
      </div>
      
      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        class="w-fit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedbackText = ref('')
const isAnonymous = ref(false)
</script>