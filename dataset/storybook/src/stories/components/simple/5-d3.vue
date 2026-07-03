<template>
  <div class="w-[304px] min-h-[262px] bg-white p-6">
    <div class="flex flex-col gap-6">
      <Textarea
        v-model="form.feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        rows="4"
        class="w-full"
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="form.anonymous" inputId="anonymous" binary />
        <label for="anonymous" class="text-[26px] leading-none text-slate-700">Anonym senden</label>
      </div>
      <div>
        <Button label="Absenden" icon="pi pi-check" iconPos="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

const form = reactive({
  feedback: '',
  anonymous: false
});
</script>