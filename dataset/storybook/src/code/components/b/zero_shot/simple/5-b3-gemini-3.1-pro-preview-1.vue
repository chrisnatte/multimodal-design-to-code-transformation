<template>
  <div class="p-6 bg-white flex flex-col w-fit">
    <div class="flex flex-col gap-6 w-[256px]">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        class="w-full"
        rows="4"
      />
      
      <div class="flex items-center gap-2">
        <Checkbox 
          v-model="isAnonymous" 
          inputId="anonymous" 
          binary 
        />
        <label 
          for="anonymous" 
          class="text-sm font-normal font-sans cursor-pointer text-surface-700 dark:text-surface-0"
        >
          Anonym senden
        </label>
      </div>
      
      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        class="w-fit"
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
const isAnonymous = ref(false);
</script>