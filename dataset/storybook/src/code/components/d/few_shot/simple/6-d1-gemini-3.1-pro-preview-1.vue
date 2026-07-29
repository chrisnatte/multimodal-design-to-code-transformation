<template>
  <div class="flex w-[368px] flex-col gap-3 p-6">
    <ProgressBar :value="progress" />
    <Tag value="Datei wird hochgeladen..." severity="info" class="w-fit font-light" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'

  const progress = ref(25)
</script>