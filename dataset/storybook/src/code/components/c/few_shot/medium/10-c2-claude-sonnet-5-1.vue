<template>
  <Card
    :pt="{
      body: 'flex flex-col gap-4 !p-0',
      content: 'flex flex-col gap-2',
      footer: 'flex justify-end mt-2',
    }"
    class="w-md p-6"
  >
    <template #title>
      <h1 class="text-lg font-medium">Dashboardeinrichtung</h1>
    </template>
    <template #content>
      <p class="text-sm text-gray-500">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </p>
      <ProgressBar :value="progress" />
      <p class="text-sm text-gray-500">Projektmetriken werden analysiert</p>
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

  const progress = ref(50)
</script>