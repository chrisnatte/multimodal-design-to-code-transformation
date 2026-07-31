<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Card>
      <div class="flex flex-col gap-[7px]">
        <span>Dashboardeinrichtung</span>
        <span class="text-sm">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </div>
      <template #content>
        <ProgressBar :value="50" />
      </template>
      <template #content>
        <span class="text-xs">Projektmetriken werden analysiert</span>
      </template>
      <template #footer>
        <Button
          label="Weiter"
          severity="secondary"
          :disabled="true"
         />
      </template>
    </Card>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
</script>
