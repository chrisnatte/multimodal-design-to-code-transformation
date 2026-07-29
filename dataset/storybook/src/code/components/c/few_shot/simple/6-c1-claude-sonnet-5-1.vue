<template>
  <div class="flex w-sm flex-col gap-2 p-4">
    <ProgressBar :value="25" />
    <Message severity="info" :closable="false">Datei wird hochgeladen...</Message>
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar'
  import Message from 'primevue/message'
</script>