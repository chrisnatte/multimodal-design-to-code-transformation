<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl">
    <div class="flex flex-col gap-8 p-4 rounded-md w-full">
      <div class="flex items-center justify-between gap-2 w-full">
        <span class="text-[18px] font-medium">Paket 1</span>
        <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" rounded="false" />
      </div>

      <div class="flex flex-col gap-4 w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.features.unbegrenzteProjekte" binary inputId="feature1" />
          <label for="feature1" class="text-sm">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.features.unbegrenzteDashboards" binary inputId="feature2" />
          <label for="feature2" class="text-sm">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.features.erweiterteAnalytics" binary inputId="feature3" />
          <label for="feature3" class="text-sm">Erweiterte Analytics</label>
        </div>
      </div>

      <div class="flex gap-2 w-full">
        <Button label="Jetzt starten" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const state = reactive({
  features: {
    unbegrenzteProjekte: true,
    unbegrenzteDashboards: true,
    erweiterteAnalytics: true
  }
})
</script>