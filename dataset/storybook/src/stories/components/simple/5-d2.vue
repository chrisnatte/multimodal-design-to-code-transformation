<template>
  <div class="w-[304px] min-h-[231px] bg-[#f3f3f3] p-6 flex flex-col gap-6">
    <Textarea
      v-model="form.feedback"
      variant="filled"
      rows="4"
      class="w-full resize-none"
      placeholder="Feedback eingeben..."
    />

    <div class="flex items-center gap-2">
      <Checkbox v-model="form.anonymous" inputId="anonymous" binary />
      <label for="anonymous" class="text-[#344767] text-[28px] leading-none scale-[0.5] origin-left">
        Anonym senden
      </label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="w-fit"
      @click="submit"
    />
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

const submit = () => {
  // submit action placeholder
};
</script>