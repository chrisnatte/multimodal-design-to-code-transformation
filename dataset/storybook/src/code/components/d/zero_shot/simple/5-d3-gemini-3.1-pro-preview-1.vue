<template>
  <div class="p-6 bg-white flex flex-col gap-6 w-[304px]">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      class="w-full h-[84px] resize-none"
    />
    
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model="isAnonymous" 
        inputId="anonymous" 
        binary 
      />
      <label 
        for="anonymous" 
        class="text-sm text-slate-700 cursor-pointer select-none"
      >
        Anonym senden
      </label>
    </div>

    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      severity="success"
      class="self-start"
    />
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