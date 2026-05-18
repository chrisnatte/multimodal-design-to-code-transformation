<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Card>
      <div class="flex flex-col gap-[7px]">
        <span>Dashboardeinrichtung</span>
        <span class="text-sm">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </div>
      <template #content>
        <div class="flex flex-col gap-3">
          <ProgressBar :value="50" />
          <span class="text-xs">Projektmetriken werden analysiert</span>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-[7px] justify-end">
          <Button
            label="Weiter"
            severity="secondary"
            :disabled="true"
           />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
</script>
