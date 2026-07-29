<template>
  <div class="flex w-[304px] flex-col gap-2.5 bg-white p-6">
    <Card
      class="w-64 !rounded-xl border border-surface-100 !shadow-sm"
      :pt="{
        body: '!p-[17.5px]',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-8">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[17.5px] font-medium leading-[22px]">Paket 1</span>
            <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="!text-[12.25px]" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Checkbox v-model="unlimitedProjects" input-id="unlimited-projects" binary />
              <label for="unlimited-projects" class="text-sm">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="unlimitedDashboards" input-id="unlimited-dashboards" binary />
              <label for="unlimited-dashboards" class="text-sm">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="advancedAnalytics" input-id="advanced-analytics" binary />
              <label for="advanced-analytics" class="text-sm">Erweiterte Analytics</label>
            </div>
          </div>

          <div class="flex gap-2">
            <Button
              label="Jetzt starten"
              fluid
              class="[--p-button-primary-background:#10b981] [--p-button-primary-border-color:#10b981] [--p-button-primary-hover-background:#059669] [--p-button-primary-hover-border-color:#059669]"
            />
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
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>