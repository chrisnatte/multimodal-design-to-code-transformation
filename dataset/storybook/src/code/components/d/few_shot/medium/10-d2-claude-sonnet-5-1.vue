<template>
  <Card
    class="w-lg"
    :pt="{
      body: 'gap-6',
      content: 'flex flex-col gap-3',
      footer: 'flex justify-end',
    }"
  >
    <template #title>Dashboardeinrichtung</template>
    <template #subtitle>
      Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
    </template>
    <template #content>
      <ProgressBar :value="progress" />
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

  const progress = ref(50)
</script>