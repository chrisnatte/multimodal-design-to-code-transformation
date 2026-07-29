<template>
  <div class="flex flex-col gap-4 p-4 w-80">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      rows="5"
      class="w-full"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" binary inputId="anonym" />
      <label for="anonym">Anonym senden</label>
    </div>

    <Button label="Absenden" icon="pi pi-check" iconPos="right" severity="success" class="w-fit" />
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