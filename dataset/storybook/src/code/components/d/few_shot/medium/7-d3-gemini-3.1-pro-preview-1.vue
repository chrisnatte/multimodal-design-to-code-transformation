<template>
  <div class="w-fit bg-white p-6">
    <Card
      class="w-[256px] rounded-xl border border-surface-200 shadow-sm"
      :pt="{ body: 'p-4', content: 'p-0' }"
    >
      <template #content>
        <div class="flex flex-col gap-8">
          <!-- Header -->
          <div class="flex items-center justify-between">
            <span class="text-lg font-medium text-surface-900">Paket 1</span>
            <Tag
              value="Beliebt"
              severity="info"
              icon="pi pi-arrow-up-right"
              class="font-bold"
            />
          </div>

          <!-- Features List -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Checkbox v-model="features.projects" inputId="projects" binary />
              <label for="projects" class="text-sm text-surface-700">
                Unbegrenzte Projekte
              </label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox
                v-model="features.dashboards"
                inputId="dashboards"
                binary
              />
              <label for="dashboards" class="text-sm text-surface-700">
                Unbegrenzte Dashboards
              </label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox
                v-model="features.analytics"
                inputId="analytics"
                binary
              />
              <label for="analytics" class="text-sm text-surface-700">
                Erweiterte Analytics
              </label>
            </div>
          </div>

          <!-- Footer Action -->
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
  analytics: true,
})
</script>