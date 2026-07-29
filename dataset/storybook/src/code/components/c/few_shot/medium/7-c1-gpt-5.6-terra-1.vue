<template>
  <Card
    :pt="{
      root: 'w-64 rounded-xl border border-surface-100 shadow-sm',
      body: '!p-4',
      content: '!p-0',
    }"
  >
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-surface-700">Paket 1</span>
          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
        </div>

        <div class="flex flex-col gap-3 text-xs text-surface-700">
          <div class="flex items-center gap-2">
            <i class="pi pi-check-square text-base text-primary" />
            <span>Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-check-square text-base text-primary" />
            <span>Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-check-square text-base text-primary" />
            <span>Erweiterte Analytics</span>
          </div>
        </div>

        <Button label="Jetzt starten" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
</script>