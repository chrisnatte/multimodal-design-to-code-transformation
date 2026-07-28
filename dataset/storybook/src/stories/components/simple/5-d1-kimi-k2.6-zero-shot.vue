<template>
  <div class="w-64 flex flex-col gap-6 items-start">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      class="w-full"
      rows="3"
    />
    <div class="flex items-center gap-2">
      <Checkbox
        v-model="anonymous"
        :binary="true"
        inputId="anonymous"
      />
      <label for="anonymous" class="text-sm text-slate-700 cursor-pointer">Anonym senden</label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="primary"
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