<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-start p-6">
    <div class="flex flex-col gap-6 w-[280px]">
      <Textarea
        v-model="form.feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        class="w-full"
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="form.anonymous" binary inputId="anonymous" />
        <label for="anonymous" class="text-slate-700 text-2xl leading-none">Anonym senden</label>
      </div>
      <div class="flex">
        <Button
          label="Absenden"
          icon="pi pi-check"
          iconPos="right"
          severity="success"
          class="text-2xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  feedback: '',
  anonymous: false
})
</script>