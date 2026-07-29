<template>
  <main class="flex min-h-[271px] items-center justify-center bg-white p-6">
    <Card class="w-full max-w-[512px]">
      <template #content>
        <div class="flex flex-col">
          <h1 class="m-0 text-lg font-medium text-slate-700">DASHBOARDEINRICHTUNG</h1>
          <p class="mb-5 mt-1 text-sm leading-[1.2] text-slate-500">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>

          <ProgressBar :value="progress" />

          <p class="mb-6 mt-2 text-xs text-slate-600">Projektmetriken werden analysiert</p>

          <div class="flex justify-end">
            <Button label="Weiter" :disabled="isNextDisabled" size="small" />
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
const isNextDisabled = ref(true)
</script>