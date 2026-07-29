<template>
  <div class="flex flex-col gap-6 p-4 max-w-sm font-sans">
    <Textarea
      v-model="feedback"
      rows="4"
      placeholder="Feedback eingeben..."
      class="w-full resize-none border-gray-300 bg-slate-50/30"
    />

    <div class="flex items-center gap-3">
      <Checkbox v-model="isAnonymous" inputId="anonymous" :binary="true" />
      <label for="anonymous" class="text-slate-700 cursor-pointer select-none">
        Anonym senden
      </label>
    </div>

    <div>
      <Button
        label="Absenden"
        icon="pi pi-check"
        iconPos="right"
        class="bg-[#12b886] border-[#12b886] hover:bg-[#0ca678] hover:border-[#0ca678] text-white px-4 py-2 rounded-md"
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