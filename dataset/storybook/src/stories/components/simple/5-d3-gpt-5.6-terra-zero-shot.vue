<template>
  <div class="flex w-64 flex-col gap-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="3"
      variant="filled"
      fluid
      class="h-[84px]"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" input-id="anonymous" binary />
      <label for="anonymous" class="text-sm">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      icon-pos="right"
      class="w-fit !bg-emerald-500 !border-emerald-500"
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