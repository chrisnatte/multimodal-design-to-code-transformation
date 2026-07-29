<template>
  <div class="p-6 bg-white">
    <Card
      :pt="{
        root: 'w-[512px] rounded-xl bg-white',
        body: 'flex flex-col gap-6 p-[17.5px]',
        caption: 'flex flex-col gap-[7px]',
        content: 'flex flex-col gap-3',
        footer: 'flex justify-end gap-[7px]',
      }"
    >
      <template #title>
        <h2 class="text-[17.5px] font-medium text-slate-800 m-0">Dashboardeinrichtung</h2>
      </template>
      <template #subtitle>
        <p class="text-sm font-normal text-slate-600 m-0">
          Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
        </p>
      </template>
      <template #content>
        <ProgressBar :value="50" class="h-[17.5px]" />
        <p class="text-xs font-light text-slate-600 m-0">Projektmetriken werden analysiert</p>
      </template>
      <template #footer>
        <Button label="Weiter" severity="secondary" disabled />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
</script>