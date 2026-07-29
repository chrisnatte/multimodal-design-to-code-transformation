<template>
  <div class="flex w-[304px] flex-col gap-6 p-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      class="w-64"
      :pt="{ root: 'h-[84px] resize-none text-sm' }"
    />
    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" input-id="anonymous" binary />
      <label for="anonymous" class="text-sm">Anonym senden</label>
    </div>
    <Button label="Absenden" icon="pi pi-check" icon-pos="right" class="w-fit" />
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