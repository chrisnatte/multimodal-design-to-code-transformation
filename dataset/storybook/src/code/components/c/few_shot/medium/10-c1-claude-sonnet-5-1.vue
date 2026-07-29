<template>
  <Card
    :pt="{
      root: 'w-lg p-6',
      body: 'flex flex-col !gap-3 !p-0',
      content: 'flex flex-col gap-4',
    }"
  >
    <template #title>
      <h2 class="text-lg font-medium">Dashboardeinrichtung</h2>
    </template>
    <template #content>
      <p class="text-sm text-gray-500">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </p>
      <ProgressBar :value="progress" />
      <span class="text-sm text-gray-500">Projektmetriken werden analysiert</span>
      <div class="flex justify-end">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'

  const progress = ref(50)
</script>