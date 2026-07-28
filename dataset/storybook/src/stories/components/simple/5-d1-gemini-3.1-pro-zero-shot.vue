<template>
  <div class="flex flex-col gap-6 w-[256px]">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      class="w-full min-h-[84px] resize-none"
    />
    
    <div class="flex items-center gap-2">
      <Checkbox
        v-model="isAnonymous"
        inputId="anonymous"
        :binary="true"
      />
      <label for="anonymous" class="text-sm font-normal text-surface-700 cursor-pointer">
        Anonym senden
      </label>
    </div>
    
    <Button
      label="Absenden"
      icon="pi pi-check"
      iconPos="right"
      class="w-max bg-[#10b981] border-[#10b981]"
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