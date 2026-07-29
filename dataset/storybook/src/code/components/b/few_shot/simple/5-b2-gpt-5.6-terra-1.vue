<template>
  <div class="flex w-[304px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Textarea
        id="feedback"
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        rows="3"
        fluid
        class="resize-none"
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="sendAnonymously" input-id="anonymous" binary />
        <label for="anonymous">Anonym senden</label>
      </div>
      <Button label="Absenden" icon="pi pi-check" icon-pos="right" class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const sendAnonymously = ref(false)
</script>