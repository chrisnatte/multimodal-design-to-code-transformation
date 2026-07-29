<template>
  <div class="p-6 bg-white" style="width: 304px;">
    <div class="flex flex-col gap-6 w-full">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        class="w-full"
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" inputId="anonym" binary />
        <label for="anonym" class="text-sm">Anonym senden</label>
      </div>

      <Button label="Absenden" icon="pi pi-check" iconPos="right" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const anonymous = ref(false)
</script>