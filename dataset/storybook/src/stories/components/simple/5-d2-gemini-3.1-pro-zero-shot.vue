<template>
  <div class="flex flex-col gap-6 w-[256px]">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="3"
      class="w-full text-sm resize-none"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" inputId="anonymous" binary />
      <label
        for="anonymous"
        class="text-sm font-normal text-surface-700 dark:text-surface-0 cursor-pointer select-none"
      >
        Anonym senden
      </label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="w-fit self-start !bg-[#10b981] !border-[#10b981] hover:!bg-[#0ea5e9] hover:!border-[#0ea5e9]"
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