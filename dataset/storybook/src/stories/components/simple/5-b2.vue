<template>
  <div class="flex flex-col gap-6">
    <Textarea
      v-model="state.feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="4"
      class="w-full"
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="state.anonymous" binary inputId="anonymous" />
      <label for="anonymous" class="text-sm">Anonym senden</label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      @click="onSubmit"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

const state = reactive({
  feedback: '',
  anonymous: false
});

const onSubmit = () => {};
</script>