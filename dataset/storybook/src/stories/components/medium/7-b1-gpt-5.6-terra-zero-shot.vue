<template>
  <div class="w-64 rounded-xl bg-white">
    <div class="flex flex-col gap-8 rounded-md px-[17.5px] py-[17.5px]">
      <div class="flex items-center justify-between gap-[7px]">
        <span class="text-[17.5px] font-medium">Paket 1</span>
        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" :rounded="false" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-[7px]">
          <Checkbox v-model="unlimitedProjects" inputId="unlimited-projects" binary />
          <label for="unlimited-projects" class="text-sm">
            Unbegrenzte Projekte
          </label>
        </div>

        <div class="flex items-center gap-[7px]">
          <Checkbox v-model="unlimitedDashboards" inputId="unlimited-dashboards" binary />
          <label for="unlimited-dashboards" class="text-sm">
            Unbegrenzte Dashboards
          </label>
        </div>

        <div class="flex items-center gap-[7px]">
          <Checkbox v-model="advancedAnalytics" inputId="advanced-analytics" binary />
          <label for="advanced-analytics" class="text-sm">
            Erweiterte Analytics
          </label>
        </div>
      </div>

      <div class="flex gap-[7px]">
        <Button
          label="Jetzt starten"
          class="w-full border-[#10b981] bg-[#10b981] hover:border-[#059669] hover:bg-[#059669]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>