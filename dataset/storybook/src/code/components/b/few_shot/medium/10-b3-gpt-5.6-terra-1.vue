<template>
  <div class="flex w-[560px] flex-col gap-[10px] bg-white p-6">
    <Card
      class="w-[512px]"
      :pt="{
        body: '!p-[17.5px]',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-[7px]">
            <span class="text-[17.5px] font-medium">Dashboardeinrichtung</span>
            <span class="text-sm">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </span>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="progress" class="!h-[17.5px]">
              <span class="text-[10.5px] font-semibold">{{ progress }}%</span>
            </ProgressBar>
            <span class="text-xs font-light">Projektmetriken werden analysiert</span>
          </div>

          <div class="flex justify-end gap-[7px]">
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