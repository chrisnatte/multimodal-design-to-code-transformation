<template>
  <Card class="w-full max-w-xl border border-surface-100 shadow-sm">
    <template #title>
      <h2 class="m-0 text-xl font-semibold text-surface-800">Dashboardeinrichtung</h2>
    </template>
    <template #subtitle>
      <p class="mb-0 mt-2 leading-relaxed text-surface-500">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </p>
    </template>
    <template #content>
      <div class="mt-6 flex flex-col gap-2">
        <ProgressBar :value="progress" class="h-4" />
        <span class="text-sm text-surface-500">Projektmetriken werden analysiert</span>
      </div>
    </template>
    <template #footer>
      <div class="mt-4 flex justify-end">
        <Button
          label="Weiter"
          severity="secondary"
          class="border-none bg-surface-100 text-surface-600 hover:bg-surface-200"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'

  const progress = ref(50)
</script>