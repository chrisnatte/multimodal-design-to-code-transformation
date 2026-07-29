<template>
  <Card
    :pt="{
      root: 'w-lg p-6',
      body: 'flex flex-col gap-6 !p-0',
      content: 'flex flex-col gap-3 !p-0',
      footer: 'flex justify-end !p-0',
    }"
  >
    <template #title>
      <h2 class="text-lg font-medium">Dashboardeinrichtung</h2>
    </template>
    <template #subtitle>
      <p class="text-sm">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</p>
    </template>
    <template #content>
      <ProgressBar :value="progressValue" />
      <span class="text-xs font-light">Projektmetriken werden analysiert</span>
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