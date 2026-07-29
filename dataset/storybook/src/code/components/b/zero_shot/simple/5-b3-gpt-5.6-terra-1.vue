<template>
  <div class="flex w-[304px] flex-col bg-white p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        variant="filled"
        fluid
        class="h-[84px] !resize-none !border-[#cbd5e1] !bg-[#f8fafc]"
      />

      <div class="flex items-center gap-2">
        <Checkbox
          v-model="sendAnonymously"
          input-id="anonymous-feedback"
          name="anonymous-feedback"
          binary
        />
        <label for="anonymous-feedback" class="text-sm font-normal">
          Anonym senden
        </label>
      </div>

      <Button
        label="Absenden"
        icon="pi pi-check"
        icon-pos="right"
        class="w-fit !border-[#10b981] !bg-[#10b981] !px-3 !py-2"
        type="button"
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
const sendAnonymously = ref(false)
</script>