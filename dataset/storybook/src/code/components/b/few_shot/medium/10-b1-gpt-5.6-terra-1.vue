<template>
  <div class="flex w-[560px] flex-col gap-2.5 bg-white p-6">
    <Card
      :pt="{
        root: 'rounded-xl',
        body: '!p-[17.5px]',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-[7px]">
            <h2 class="text-[17.5px] font-medium">Dashboardeinrichtung</h2>
            <p class="text-sm">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="progress" />
            <span class="text-xs font-light">Projektmetriken werden analysiert</span>
          </div>

          <div class="flex justify-end">
            <Button label="Weiter" severity="secondary" disabled />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
</script>