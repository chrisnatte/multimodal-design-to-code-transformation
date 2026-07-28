<template>
  <div class="flex flex-col gap-4 p-6 max-w-md">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="3"
      class="w-full"
      style="resize: none"
    />
    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" binary inputId="anonymous" />
      <label for="anonymous" class="text-slate-700 text-sm">Anonym senden</label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="success"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feedback = ref('');
const anonymous = ref(false);
</script>