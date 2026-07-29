<template>
  <Card
    class="max-w-xl"
    :pt="{
      body: 'flex flex-col !gap-6 !p-6',
      caption: 'flex flex-col !gap-2',
      content: 'flex flex-col !gap-3 !py-0',
      footer: 'flex justify-end !pt-0',
    }"
  >
    <template #title>
      <span class="text-lg font-medium">Dashboardeinrichtung</span>
    </template>
    <template #subtitle>
      <span class="text-sm">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </span>
    </template>
    <template #content>
      <ProgressBar :value="50" />
      <span class="text-xs font-light">Projektmetriken werden analysiert</span>
    </template>
    <template #footer>
      <Button label="Weiter" severity="secondary" disabled />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'
</script>