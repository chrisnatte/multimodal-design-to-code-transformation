<template>
  <div class="bg-white p-6 inline-block">
    <div class="flex flex-col gap-6" style="width: 256px;">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        rows="4"
        class="w-full"
        style="resize: none;"
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" inputId="anonymSenden" binary />
        <label for="anonymSenden">Anonym senden</label>
      </div>

      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        severity="success"
        @click="submitFeedback"
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
const anonymous = ref(false);

const submitFeedback = () => {
  console.log('Feedback:', feedback.value, 'Anonym:', anonymous.value);
};
</script>