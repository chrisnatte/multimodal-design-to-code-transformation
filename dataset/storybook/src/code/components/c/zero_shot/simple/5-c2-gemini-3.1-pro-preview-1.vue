<template>
  <div class="flex flex-col gap-5 p-4 max-w-md">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="4"
      class="w-full resize-none"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="isAnonymous" inputId="anonymous" binary />
      <label for="anonymous" class="text-surface-700 dark:text-surface-300 cursor-pointer select-none">
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

const feedback = ref('');
const isAnonymous = ref(false);
</script>