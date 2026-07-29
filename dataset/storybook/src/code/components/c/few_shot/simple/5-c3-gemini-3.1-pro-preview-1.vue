<template>
  <div class="flex flex-col gap-4 p-4 max-w-sm">
    <Textarea
      v-model="feedback"
      rows="4"
      placeholder="Feedback eingeben..."
      class="w-full resize-none"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" inputId="anonymous" binary />
      <label for="anonymous" class="text-slate-700 cursor-pointer">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="success"
      class="w-fit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feedback = ref('');
const isAnonymous = ref(false);
</script>