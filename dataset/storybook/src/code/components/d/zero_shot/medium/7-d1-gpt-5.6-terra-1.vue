<template>
  <main class="flex min-h-[286px] items-start bg-white p-6">
    <section class="w-64 rounded-xl border border-surface-200 bg-white shadow-sm">
      <div class="flex flex-col gap-8 p-[17.5px]">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-[17.5px] font-medium leading-[21px] text-surface-700">
            Paket 1
          </h2>

          <Tag
            value="Beliebt"
            icon="pi pi-arrow-up-right"
            severity="info"
            class="text-[12px]"
          />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedProjects" input-id="projects" binary />
            <label for="projects" class="text-sm text-surface-700">
              Unbegrenzte Projekte
            </label>
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedDashboards" input-id="dashboards" binary />
            <label for="dashboards" class="text-sm text-surface-700">
              Unbegrenzte Dashboards
            </label>
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="advancedAnalytics" input-id="analytics" binary />
            <label for="analytics" class="text-sm text-surface-700">
              Erweiterte Analytics
            </label>
          </div>
        </div>

        <Button
          label="Jetzt starten"
          class="w-full"
          @click="startPackage"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)

const startPackage = () => {}
</script>