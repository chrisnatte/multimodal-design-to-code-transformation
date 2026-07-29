<template>
  <div class="w-[560px] bg-white p-6">
    <Card
      :pt="{
        root: 'w-full rounded-xl border border-surface-100 shadow-sm',
        body: '!p-[17.5px]',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-[7px]">
            <h2 class="m-0 text-[17.5px] font-medium text-surface-700">
              Dashboardeinrichtung
            </h2>
            <p class="m-0 text-sm text-surface-500">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar
              :value="50"
              class="h-[17.5px]"
              :pt="{
                value: 'bg-emerald-500',
                label: 'text-[10.5px] font-semibold',
              }"
            />
            <span class="text-xs font-light text-surface-600">
              Projektmetriken werden analysiert
            </span>
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
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
</script>