<template>
  <Card
    :pt="{
      root: 'w-64 border border-surface-200 shadow-sm rounded-xl',
      body: 'p-5 flex flex-col gap-8',
      title: 'm-0',
      content: 'm-0 p-0',
      footer: 'm-0 p-0'
    }"
  >
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium text-surface-900">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <Checkbox v-model="features.projects" inputId="projects" binary />
          <label for="projects" class="text-sm text-surface-700">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="features.dashboards" inputId="dashboards" binary />
          <label for="dashboards" class="text-sm text-surface-700">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox v-model="features.analytics" inputId="analytics" binary />
          <label for="analytics" class="text-sm text-surface-700">Erweiterte Analytics</label>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="primary" class="w-full" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const features = ref({
  projects: true,
  dashboards: true,
  analytics: true
})
</script>