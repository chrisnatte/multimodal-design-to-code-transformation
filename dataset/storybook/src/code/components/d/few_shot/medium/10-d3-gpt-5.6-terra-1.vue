<template>
  <div class="w-full max-w-[560px] p-6">
    <Card
      :pt="{
        root: 'rounded-xl border border-surface-100 shadow-sm',
        body: '!p-[17.5px]',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-[7px]">
            <h2 class="m-0 text-[17.5px] leading-[21px] font-medium">
              Dashboardeinrichtung
            </h2>
            <p class="m-0 text-sm leading-[17px] text-surface-500">
              Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="50" class="h-[17.5px]" :show-value="false">
              <span class="text-[10.5px] leading-[13px] font-semibold text-white">50%</span>
            </ProgressBar>
            <span class="text-xs font-light text-surface-500">
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