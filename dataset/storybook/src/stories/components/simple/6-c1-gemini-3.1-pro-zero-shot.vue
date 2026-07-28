<template>
  <div class="flex flex-col gap-3 p-6 w-full max-w-md font-sans">
    <ProgressBar :value="progress" :pt="{ value: { class: 'bg-emerald-500' } }" />
    <div class="bg-blue-50 text-slate-600 px-3 py-1.5 rounded-md text-sm self-start">
      Datei wird hochgeladen...
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';

const progress = ref(25);
</script>