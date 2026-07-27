<template>
  <div class="flex w-80 flex-col gap-3">
    <ProgressBar
      :value="progressValue"
      :showValue="false"
      aria-label="Upload progress"
      class="h-[17.5px]"
    >
      <span class="text-[10.5px] font-semibold">{{ progressText }}</span>
    </ProgressBar>

    <Tag
      value="Datei wird hochgeladen..."
      severity="info"
      rounded
      class="w-fit text-[12.25px] font-light"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const progressValue = ref(25);
const progressText = ref('25%');
</script>