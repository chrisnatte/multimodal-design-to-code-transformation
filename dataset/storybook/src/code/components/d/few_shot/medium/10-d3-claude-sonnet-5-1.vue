<template>
  <Card
    :pt="{
      root: 'w-xl',
      body: 'p-6 gap-6',
      caption: 'gap-2',
      title: '!text-lg !font-medium',
      subtitle: '!text-sm',
      content: 'flex flex-col gap-3 !py-0',
      footer: 'flex justify-end !pt-0',
    }"
  >
    <template #title>Dashboardeinrichtung</template>
    <template #subtitle>Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</template>
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
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'

  const progress = ref(50)
</script>