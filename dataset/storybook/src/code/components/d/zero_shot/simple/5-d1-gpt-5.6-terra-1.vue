<template>
  <div class="flex w-[304px] flex-col bg-white p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="3"
        class="h-[84px] w-full"
        aria-label="Feedback eingeben"
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" input-id="anonymous" :binary="true" />
        <label for="anonymous" class="text-sm text-slate-700">Anonym senden</label>
      </div>

      <Button
        label="Absenden"
        icon="pi pi-check"
        icon-pos="right"
        class="w-fit"
        @click="submitFeedback"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const anonymous = ref(false)

const submitFeedback = () => {}
</script>