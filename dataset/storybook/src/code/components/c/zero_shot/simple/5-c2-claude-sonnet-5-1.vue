<template>
  <div class="flex flex-col gap-4 p-4 max-w-sm">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="5"
      cols="30"
      class="w-full"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" inputId="anonymous" binary />
      <label for="anonymous">Anonym senden</label>
    </div>

    <Button label="Absenden" icon="pi pi-check" severity="success" class="w-fit" />
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