<template>
  <div class="bg-white p-6 flex justify-center">
    <div class="flex flex-col gap-6 w-64">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        rows="4"
        class="w-full"
      />

      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" binary inputId="anonymous" />
        <label for="anonymous" class="text-sm">Anonym senden</label>
      </div>

      <Button label="Absenden" icon="pi pi-check" iconPos="right" class="w-fit" />
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
</script>