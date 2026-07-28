<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <Card class="w-full max-w-lg shadow-sm rounded-lg">
      <template #title>
        <div class="text-xl font-semibold text-gray-800">
          Dashboardeinrichtung
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <p class="text-gray-600">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>
          <ProgressBar :value="progressValue" :showValue="true" class="h-4" />
          <p class="text-sm text-gray-600">
            Projektmetriken werden analysiert
          </p>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end pt-2">
          <Button label="Weiter" severity="secondary" />
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

const progressValue = ref(50)
</script>