<template>
  <div class="flex flex-col gap-3">
    <ProgressBar :value="25" />
    <Tag value="Datei wird hochgeladen..." severity="info" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const form = reactive({})
</script>