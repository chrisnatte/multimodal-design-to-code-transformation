<template>
  <div class="flex justify-center p-8">
    <Card class="w-full max-w-md">
      <template #content>
        <div class="flex flex-col gap-3">
          <h2 class="text-lg font-semibold text-gray-800">Dashboardeinrichtung</h2>
          <p class="text-sm text-gray-500">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
          <ProgressBar :value="progress" class="h-6"></ProgressBar>
          <p class="text-sm text-gray-500">Projektmetriken werden analysiert</p>
          <div class="flex justify-end mt-2">
            <Button label="Weiter" disabled />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const progress = ref(50)
</script>