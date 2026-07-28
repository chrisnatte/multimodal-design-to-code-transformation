<template>
  <div class="w-[256px] rounded-xl bg-white border border-gray-100 shadow-sm p-[17.5px] flex flex-col gap-[32px] font-sans">
    
    <!-- Header -->
    <div class="flex items-center justify-between w-full">
      <span class="text-[17.5px] font-medium text-gray-900 leading-tight">Paket 1</span>
      <Tag 
        value="Beliebt" 
        icon="pi pi-arrow-up-right" 
        class="!bg-[#E0F2FE] !text-[#0369A1] !text-[12.25px] !font-bold px-2.5 py-1 rounded-md" 
      />
    </div>

    <!-- Features Content -->
    <div class="flex flex-col gap-4 w-full">
      <div class="flex items-center gap-3">
        <Checkbox 
          v-model="selectedFeatures" 
          inputId="feature-projects" 
          name="feature" 
          value="projects" 
          :pt="{ box: { class: selectedFeatures.includes('projects') ? '!bg-[#10B981] !border-[#10B981]' : '' } }"
        />
        <label for="feature-projects" class="text-[14px] text-gray-700 cursor-pointer select-none">
          Unbegrenzte Projekte
        </label>
      </div>
      
      <div class="flex items-center gap-3">
        <Checkbox 
          v-model="selectedFeatures" 
          inputId="feature-dashboards" 
          name="feature" 
          value="dashboards" 
          :pt="{ box: { class: selectedFeatures.includes('dashboards') ? '!bg-[#10B981] !border-[#10B981]' : '' } }"
        />
        <label for="feature-dashboards" class="text-[14px] text-gray-700 cursor-pointer select-none">
          Unbegrenzte Dashboards
        </label>
      </div>
      
      <div class="flex items-center gap-3">
        <Checkbox 
          v-model="selectedFeatures" 
          inputId="feature-analytics" 
          name="feature" 
          value="analytics"
          :pt="{ box: { class: selectedFeatures.includes('analytics') ? '!bg-[#10B981] !border-[#10B981]' : '' } }"
        />
        <label for="feature-analytics" class="text-[14px] text-gray-700 cursor-pointer select-none">
          Erweiterte Analytics
        </label>
      </div>
    </div>

    <!-- Footer Action -->
    <div class="w-full">
      <Button 
        label="Jetzt starten" 
        class="w-full !bg-[#10B981] !border-[#10B981] hover:!bg-[#059669] hover:!border-[#059669] !text-white text-[14px] font-medium py-2 rounded-md transition-colors" 
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const selectedFeatures = ref(['projects', 'dashboards', 'analytics'])
</script>