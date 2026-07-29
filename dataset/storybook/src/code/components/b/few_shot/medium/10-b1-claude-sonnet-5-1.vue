<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Card class="w-[512px]" :pt="{ body: '!p-4.5 gap-6', content: '!p-0 flex flex-col gap-3' }">
      <template #title>
        <span class="text-lg font-medium">Dashboardeinrichtung</span>
      </template>
      <template #subtitle>
        <span class="text-sm">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </template>
      <template #content>
        <ProgressBar :value="progress" class="!h-[17.5px]" />
        <span class="text-xs font-light">Projektmetriken werden analysiert</span>
      </template>
      <template #footer>
        <div class="flex justify-end">
          <Button label="Weiter" severity="secondary" disabled />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'

  const progress = ref(50)
</script>