<template>
  <div class="flex flex-col gap-3 p-4 w-full max-w-sm">
    <ProgressBar
      :value="progressValue"
      :pt="{
        value: { class: 'bg-emerald-500' }
      }"
    />
    <Tag
      value="Datei wird hochgeladen..."
      class="bg-sky-100 text-sky-700 self-start font-normal px-3 py-1"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
</script>