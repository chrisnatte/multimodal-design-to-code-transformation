<template>
  <div class="flex gap-1 p-8 bg-[#f5f7fa] min-h-[176px]">
    <div class="flex items-center gap-2 p-3.5 rounded-md bg-white">
      <div class="flex items-center gap-2 py-2">
        <i class="pi pi-home text-sm text-slate-500"></i>
        <i class="pi pi-chevron-right text-xs text-slate-400"></i>
        <span class="text-sm text-slate-600">Projekt1</span>
        <i class="pi pi-chevron-right text-xs text-slate-400"></i>
        <div class="flex items-center gap-1.5">
          <i class="pi pi-table text-sm text-slate-500"></i>
          <span class="text-sm text-slate-600">Gruppe1</span>
        </div>
        <i class="pi pi-chevron-right text-xs text-slate-400"></i>
      </div>

      <div class="relative">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          @click="state.menuOpen = !state.menuOpen"
          class="!text-slate-700"
        />
        <Menu
          v-if="state.menuOpen"
          :model="state.menuItems"
          class="absolute left-0 top-[calc(100%+2px)] w-44 shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const state = reactive({
  menuOpen: true,
  menuItems: [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
  ]
})
</script>