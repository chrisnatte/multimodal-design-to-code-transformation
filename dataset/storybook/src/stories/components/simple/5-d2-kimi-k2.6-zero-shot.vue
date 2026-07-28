<template>
  <div class="flex flex-col gap-6 w-64">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      :rows="4"
      fluid
      class="resize-none"
    />
    <div class="flex items-center gap-2">
      <Checkbox
        v-model="anonymous"
        binary
        inputId="anonymous"
      />
      <label for="anonymous" class="text-sm cursor-pointer">Anonym senden</label>
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