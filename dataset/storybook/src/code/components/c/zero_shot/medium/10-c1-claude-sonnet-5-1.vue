<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
      <h2 class="text-lg font-semibold text-gray-800 mb-2">Dashboardeinrichtung</h2>
      <p class="text-sm text-gray-500 mb-4">
        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
      </p>

      <ProgressBar :value="progress" class="mb-3 h-6"></ProgressBar>

      <p class="text-sm text-gray-500 mb-6">Projektmetriken werden analysiert</p>

      <div class="flex justify-end">
        <Button label="Weiter" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const progress = ref(50)
</script>