<template>
  <div class="p-6">
    <Card
      :pt="{
        root: 'w-[256px] shadow-sm border border-surface-100 rounded-xl',
        body: 'p-4 flex flex-col gap-8',
        content: 'p-0 m-0'
      }"
    >
      <template #content>
        <div class="flex flex-col gap-8">
          <div class="flex items-center justify-between">
            <span class="text-[17.5px] font-medium text-surface-900">Paket 1</span>
            <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="!font-bold" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Checkbox v-model="features.projects" inputId="f-projects" binary />
              <label for="f-projects" class="text-sm text-surface-700">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="features.dashboards" inputId="f-dashboards" binary />
              <label for="f-dashboards" class="text-sm text-surface-700">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="features.analytics" inputId="f-analytics" binary />
              <label for="f-analytics" class="text-sm text-surface-700">Erweiterte Analytics</label>
            </div>
          </div>

          <Button label="Jetzt starten" severity="primary" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
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