<template>
  <div class="flex min-h-44 items-start px-10 pt-10">
    <div class="flex items-start gap-3 text-sm">
      <i class="pi pi-home mt-2 text-xs text-slate-400"></i>
      <i class="pi pi-chevron-right mt-2 text-xs text-slate-400"></i>

      <span class="mt-1 text-slate-500">Projekt1</span>

      <i class="pi pi-chevron-right mt-2 text-xs text-slate-400"></i>

      <i class="pi pi-table mt-2 text-xs text-slate-400"></i>
      <span class="mt-1 text-slate-500">Gruppe1</span>

      <i class="pi pi-chevron-right mt-2 text-xs text-slate-400"></i>

      <div class="flex flex-col">
        <Button
          label="Dashboard anzeigen"
          text
          size="small"
          class="!rounded-md !bg-slate-100 !px-3 !py-2 !font-normal !text-slate-600"
          @click="dashboardOpen = !dashboardOpen"
        />
        <div
          v-if="dashboardOpen"
          class="mt-1 w-44 overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-md"
        >
          <Button
            label="Dashboard 1"
            text
            size="small"
            class="!w-full !justify-start !rounded-none !px-3 !py-2 !font-normal !text-slate-600"
            @click="selectedDashboard = 'Dashboard 1'"
          />
          <Button
            label="Dashboard 2"
            text
            size="small"
            class="!w-full !justify-start !rounded-none !px-3 !py-2 !font-normal !text-slate-600"
            @click="selectedDashboard = 'Dashboard 2'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const dashboardOpen = ref(true)
const selectedDashboard = ref('')
</script>