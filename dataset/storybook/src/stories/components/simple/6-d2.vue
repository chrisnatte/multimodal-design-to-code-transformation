<template>
  <div class="flex flex-col gap-3 p-6 w-[384px] bg-[#efefef]">
    <ProgressBar :value="state.progress" class="h-[18px]" />
    <Tag :value="state.message" severity="info" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const state = reactive({
  progress: 25,
  message: 'Datei wird hochgeladen...'
});
</script>