<template>
  <div class="flex flex-col gap-5 p-4 max-w-sm font-sans">
    <Textarea
      v-model="feedbackText"
      rows="4"
      placeholder="Feedback eingeben..."
      class="w-full resize-none"
    />

    <div class="flex items-center gap-2">
      <Checkbox
        v-model="isAnonymous"
        inputId="anonymous-check"
        binary
      />
      <label for="anonymous-check" class="text-slate-700 cursor-pointer select-none">
        Anonym senden
      </label>
    </div>

    <div>
      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        severity="success"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feedbackText = ref('');
const isAnonymous = ref(false);
</script>