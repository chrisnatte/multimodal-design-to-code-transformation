<template>
  <div class="flex min-h-44 items-start px-10 pt-10">
    <nav class="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
      <i class="pi pi-home text-xs text-slate-400"></i>
      <i class="pi pi-chevron-right text-xs text-slate-400"></i>

      <span>Projekt1</span>
      <i class="pi pi-chevron-right text-xs text-slate-400"></i>

      <i class="pi pi-table text-sm text-slate-400"></i>
      <span>Gruppe1</span>
      <i class="pi pi-chevron-right text-xs text-slate-400"></i>

      <div class="relative">
        <Button
          label="Dashboard anzeigen"
          text
          size="small"
          class="!bg-slate-100 !px-3 !py-2 !font-medium !text-slate-600 hover:!bg-slate-100"
          @click="menuOpen = !menuOpen"
        />
        <div
          v-if="menuOpen"
          class="absolute left-0 top-full z-10 mt-0.5 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-md"
        >
          <Button
            label="Dashboard 1"
            text
            class="!w-full !justify-start !rounded-none !px-3 !py-2 !text-sm !font-normal !text-slate-600 hover:!bg-slate-50"
            @click="selectedDashboard = 'Dashboard 1'"
          />
          <Button
            label="Dashboard 2"
            text
            class="!w-full !justify-start !rounded-none !px-3 !py-2 !text-sm !font-normal !text-slate-600 hover:!bg-slate-50"
            @click="selectedDashboard = 'Dashboard 2'"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const menuOpen = ref(true)
const selectedDashboard = ref('')
</script>