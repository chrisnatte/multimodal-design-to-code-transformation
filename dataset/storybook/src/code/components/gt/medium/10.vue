<template>
  <Card
    :pt="{
      root: 'w-full max-w-lg',
      body: 'flex flex-col !gap-6',
      content: 'flex flex-col gap-3',
      footer: 'flex items-center justify-end',
    }"
  >
    <template #title>Dashboardeinrichtung</template>

    <template #subtitle>
      Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
    </template>

    <template #content>
      <ProgressBar :value="50" show-value />
      <span class="text-xs font-light">Projektmetriken werden analysiert</span>
    </template>

    <template #footer>
      <Button label="Weiter" severity="secondary" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
</script>
