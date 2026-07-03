<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="flex flex-col gap-6 w-full max-w-md">
      <InputText
        v-model="form.feedback"
        placeholder="Feedback eingeben..."
        class="w-full"
      />

      <div class="flex items-center gap-3">
        <Checkbox v-model="form.anonymous" binary inputId="anonymous" />
        <label for="anonymous" class="text-2xl text-slate-600">Anonym senden</label>
      </div>

      <div class="flex">
        <Button
          label="Absenden"
          icon="pi pi-check"
          iconPos="right"
          class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  feedback: '',
  anonymous: false
})
</script>