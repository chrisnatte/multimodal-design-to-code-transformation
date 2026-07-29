<template>
  <div class="flex w-[384px] flex-col gap-3 p-6">
    <ProgressBar :value="25" class="w-full" />
    <Tag value="Datei wird hochgeladen..." severity="info" class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>