<template>
  <div class="flex w-[304px] flex-col gap-6 bg-white p-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="3"
      class="w-full resize-none"
    />
    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" input-id="anonym" binary />
      <label for="anonym" class="text-sm text-surface-700">Anonym senden</label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      icon-pos="right"
      severity="primary"
      class="w-fit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const feedback = ref('')
const isAnonymous = ref(false)
</script>