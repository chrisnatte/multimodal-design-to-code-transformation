<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-fit">
    <div class="flex flex-col gap-[7px] rounded-xl bg-white w-[256px]">
      <div class="flex flex-col gap-8 p-[17.5px] rounded-md w-full">
        
        <div class="flex flex-row justify-between items-center gap-[7px] w-full">
          <span class="font-medium text-[17.5px] font-sans">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>
        
        <div class="flex flex-col gap-4 w-full">
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedProjects" inputId="cb1" binary />
            <label for="cb1" class="text-sm font-normal font-sans cursor-pointer">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedDashboards" inputId="cb2" binary />
            <label for="cb2" class="text-sm font-normal font-sans cursor-pointer">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="advancedAnalytics" inputId="cb3" binary />
            <label for="cb3" class="text-sm font-normal font-sans cursor-pointer">Erweiterte Analytics</label>
          </div>
        </div>

        <div class="flex flex-row gap-[7px] w-full">
          <Button label="Jetzt starten" class="w-full" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>