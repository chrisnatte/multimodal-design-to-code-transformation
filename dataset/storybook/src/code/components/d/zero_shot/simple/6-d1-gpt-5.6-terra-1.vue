<template>
  <div class="flex w-[368px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-3">
      <ProgressBar :value="25" class="h-[18px]" />
      <Tag
        value="Datei wird hochgeladen..."
        severity="info"
        rounded
        class="w-fit text-xs font-light"
      />
    </div>
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>