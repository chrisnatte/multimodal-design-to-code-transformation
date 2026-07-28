<template>
  <div 
    class="w-64 p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-8"
    style="--p-primary-color: #10B981; --p-primary-500: #10B981; --p-primary-600: #059669;"
  >
    <!-- Header -->
    <div class="flex justify-between items-center w-full">
      <span class="text-[17.5px] font-medium text-gray-900">Paket 1</span>
      <Tag 
        class="!bg-[#E0F2FE] !text-[#0284C7] !text-[12.25px] !font-bold px-2 py-1" 
        icon="pi pi-arrow-up-right" 
        value="Beliebt" 
        :rounded="false"
      />
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <Checkbox v-model="unlimitedProjects" inputId="unlimitedProjects" binary />
        <label for="unlimitedProjects" class="text-sm font-normal text-gray-700 cursor-pointer">
          Unbegrenzte Projekte
        </label>
      </div>
      <div class="flex items-center gap-3">
        <Checkbox v-model="unlimitedDashboards" inputId="unlimitedDashboards" binary />
        <label for="unlimitedDashboards" class="text-sm font-normal text-gray-700 cursor-pointer">
          Unbegrenzte Dashboards
        </label>
      </div>
      <div class="flex items-center gap-3">
        <Checkbox v-model="advancedAnalytics" inputId="advancedAnalytics" binary />
        <label for="advancedAnalytics" class="text-sm font-normal text-gray-700 cursor-pointer">
          Erweiterte Analytics
        </label>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full mt-1">
      <Button 
        label="Jetzt starten" 
        class="w-full text-sm font-medium" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const unlimitedProjects = ref(true);
const unlimitedDashboards = ref(true);
const advancedAnalytics = ref(true);
</script>