<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Card
      :pt="{
        root: 'w-[512px] rounded-xl bg-white',
        body: 'flex flex-col gap-6 p-4',
        content: 'flex flex-col gap-3',
        footer: 'flex justify-end gap-2',
      }"
    >
      <template #title>
        <div class="flex flex-col gap-2">
          <span class="text-lg font-medium">Dashboardeinrichtung</span>
          <span class="text-sm font-normal"
            >Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span
          >
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3">
          <ProgressBar :value="50" />
          <span class="text-xs font-light">Projektmetriken werden analysiert</span>
        </div>
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