<template>
  <div class="p-6 bg-white min-h-screen">
    <div class="flex flex-col gap-6 w-[256px]">
      <Textarea
        v-model="form.feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        class="w-full"
        fluid
      />

      <div class="flex items-center">
        <Checkbox v-model="form.anonymous" inputId="anonymous" binary />
        <label for="anonymous" class="ml-2 text-sm text-slate-700">Anonym senden</label>
      </div>

      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        severity="success"
        class="w-fit"
        @click="submit"
      />
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

const submit = () => {}
</script>