<template>
  <div class="p-6 bg-white flex flex-col gap-6 w-[304px]">
    <div class="flex flex-col gap-6 w-64">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        variant="filled"
        class="w-full"
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" inputId="anonymSenden" binary />
        <label for="anonymSenden">Anonym senden</label>
      </div>

      <Button label="Absenden" icon="pi pi-check" iconPos="right" @click="submitFeedback" />
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
  console.log('Feedback:', feedback.value, 'Anonymous:', anonymous.value);
};
</script>