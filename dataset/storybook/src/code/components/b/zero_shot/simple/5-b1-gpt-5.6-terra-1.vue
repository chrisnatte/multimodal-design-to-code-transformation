<template>
  <form class="flex w-[304px] flex-col bg-white p-6" @submit.prevent>
    <div class="flex w-[256px] flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="3"
        class="h-[84px] w-full resize-none"
      />

      <div class="flex items-center">
        <Checkbox v-model="anonymous" inputId="anonymous" binary />
        <label for="anonymous" class="ml-2 text-sm">Anonym senden</label>
      </div>

      <Button
        type="submit"
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        class="w-fit"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const anonymous = ref(false)
</script>