<template>
  <main class="p-6">
    <Card
      class="w-full max-w-[512px] border border-surface-100 shadow-sm"
      :pt="{
        body: 'gap-2 !p-4',
        title: '!text-lg !font-medium',
        content: '!p-0',
        footer: '!mt-4 !p-0',
      }"
    >
      <template #title>Dashboardeinrichtung</template>

      <template #content>
        <div class="flex flex-col gap-5">
          <p class="m-0 text-sm text-surface-500">
            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
          </p>

          <div class="flex flex-col gap-3">
            <ProgressBar :value="setupProgress" :show-value="true" class="h-5" />
            <span class="text-xs text-surface-500">Projektmetriken werden analysiert</span>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-end">
          <Button label="Weiter" severity="secondary" size="small" disabled />
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const setupProgress = ref(50)
</script>