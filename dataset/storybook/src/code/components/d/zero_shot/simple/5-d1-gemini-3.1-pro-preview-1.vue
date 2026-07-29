<template>
  <div class="bg-white p-6 flex flex-col gap-6 w-[304px]">
    <div class="flex flex-col gap-6 w-64">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        class="w-full h-[84px] bg-[#f8fafc] border-[#cbd5e1] rounded-md p-2.5 text-sm font-normal font-sans"
        autoResize
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="isAnonymous" inputId="anonymous" :binary="true" />
        <label for="anonymous" class="text-sm font-normal font-sans text-slate-700 cursor-pointer">
          Anonym senden
        </label>
      </div>

      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        class="w-[113px] h-[33px] bg-[#10b981] border-none text-white text-sm font-medium font-sans"
        @click="submitFeedback"
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

const submitFeedback = () => {
  // Handle submission
}
</script>