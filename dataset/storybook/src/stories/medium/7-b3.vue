<template>
  <Card class="w-full max-w-md rounded-xl">
    <template #content>
      <div class="flex flex-col gap-8 p-4">
        <div class="flex items-center justify-between gap-2">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="state.unbegrenzteProjekte" binary inputId="unbegrenzteProjekte" />
            <label for="unbegrenzteProjekte" class="text-sm">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="state.unbegrenzteDashboards" binary inputId="unbegrenzteDashboards" />
            <label for="unbegrenzteDashboards" class="text-sm">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="state.erweiterteAnalytics" binary inputId="erweiterteAnalytics" />
            <label for="erweiterteAnalytics" class="text-sm">Erweiterte Analytics</label>
          </div>
        </div>

        <div class="flex gap-2">
          <Button label="Jetzt starten" class="w-full" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const state = reactive({
  unbegrenzteProjekte: true,
  unbegrenzteDashboards: true,
  erweiterteAnalytics: true
})
</script>