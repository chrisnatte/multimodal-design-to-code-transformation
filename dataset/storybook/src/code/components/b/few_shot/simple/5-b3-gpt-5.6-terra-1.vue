<template>
  <div class="w-[304px] bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        rows="3"
        fluid
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="sendAnonymously" input-id="anonymous-feedback" binary />
        <label for="anonymous-feedback" class="text-sm">Anonym senden</label>
      </div>
      <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="success" />
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