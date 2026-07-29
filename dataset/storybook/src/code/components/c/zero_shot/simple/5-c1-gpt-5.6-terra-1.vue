<template>
  <div class="flex min-h-[231px] w-[304px] flex-col px-6 pt-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="4"
      class="w-full"
    />

    <div class="mt-6 flex items-center gap-2">
      <Checkbox v-model="anonymous" input-id="anonymous" binary />
      <label for="anonymous" class="text-sm text-slate-700">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      icon-pos="right"
      class="mt-6 w-fit"
      @click="submitFeedback"
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

const submitFeedback = () => {
  // Submit feedback
}
</script>