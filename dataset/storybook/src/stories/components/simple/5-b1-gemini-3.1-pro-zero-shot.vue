<template>
  <div class="flex flex-col gap-6 w-64">
    <Textarea
      v-model="feedbackText"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="3"
      class="w-full"
    />
    <div class="flex items-center gap-2">
      <Checkbox
        v-model="sendAnonymous"
        inputId="anonymous"
        :binary="true"
      />
      <label for="anonymous" class="text-sm font-normal font-sans">
        Anonym senden
      </label>
    </div>
    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="w-[113px] h-[33px]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feedbackText = ref('');
const sendAnonymous = ref(false);
</script>