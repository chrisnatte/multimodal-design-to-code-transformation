<template>
  <Card
    :pt="{
      root: 'w-lg p-6',
      body: 'flex flex-col gap-4 !p-0',
      content: 'flex flex-col gap-3',
      footer: 'flex justify-end mt-4',
    }"
  >
    <template #title>
      <span class="text-lg font-medium">Dashboardeinrichtung</span>
    </template>
    <template #content>
      <p class="m-0 text-sm text-gray-500">
        Dein Dashboard zur Zeit eingerichten. Dies kann wenige Minuten dauern.
      </p>
      <ProgressBar :value="progressValue" />
      <p class="m-0 text-sm text-gray-500">Projektmetriken werden analysiert</p>
    </template>
    <template #footer>
      <Button label="Weiter" severity="secondary" disabled />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'

  const progressValue = ref(50)
</script>