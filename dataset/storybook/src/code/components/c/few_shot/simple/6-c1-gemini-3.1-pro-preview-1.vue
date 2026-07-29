<template>
  <div class="flex w-80 flex-col gap-3 p-4">
    <ProgressBar :value="25" />
    <Tag severity="info" value="Datei wird hochgeladen..." class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
</script>