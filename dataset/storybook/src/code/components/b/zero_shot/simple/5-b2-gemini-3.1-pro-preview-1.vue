<template>
  <div class="p-6 bg-white flex flex-col w-[304px]">
    <div class="flex flex-col gap-6 w-[256px]">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        rows="4"
        class="w-full"
      />
      
      <div class="flex items-center gap-2">
        <Checkbox 
          v-model="isAnonymous" 
          inputId="anonymous" 
          binary 
        />
        <label for="anonymous" class="text-sm font-normal cursor-pointer">
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

const feedback = ref('')
const isAnonymous = ref(false)
</script>