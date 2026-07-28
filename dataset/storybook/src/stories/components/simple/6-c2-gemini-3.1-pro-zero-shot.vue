<template>
  <div class="flex flex-col gap-3 p-6 w-full max-w-md">
    <ProgressBar 
      :value="progressValue" 
      :pt="{ value: { style: { backgroundColor: '#22c55e' } } }" 
    />
    <div class="flex justify-start">
      <Tag 
        severity="info" 
        value="Datei wird hochgeladen..." 
        :pt="{ root: { class: 'bg-blue-50 text-blue-600 font-normal text-sm px-3 py-1' } }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>