<template>
  <div class="flex w-[304px] flex-col p-6">
    <div class="flex w-full flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        variant="filled"
        fluid
        aria-label="Feedback eingeben"
        class="h-[84px] resize-none"
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" input-id="anonymous" binary />
        <label for="anonymous" class="text-sm">Anonym senden</label>
      </div>

      <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="success" class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const anonymous = ref(false)
</script>