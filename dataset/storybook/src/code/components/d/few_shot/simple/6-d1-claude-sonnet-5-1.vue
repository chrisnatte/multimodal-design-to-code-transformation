<template>
  <div class="flex flex-col gap-3 p-6">
    <ProgressBar :value="25" class="!h-[17.5px] w-80" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded class="!bg-sky-100 !text-sky-700 w-fit" />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>