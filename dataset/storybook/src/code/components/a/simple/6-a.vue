<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="25" />
    <Tag
      value="Datei wird hochgeladen..."
      severity="info"
      :rounded="true"
     />
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>
