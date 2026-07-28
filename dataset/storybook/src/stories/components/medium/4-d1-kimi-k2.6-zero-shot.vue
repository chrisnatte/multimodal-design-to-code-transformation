<template>
  <div class="inline-flex items-center gap-1.5 bg-white rounded-md p-3.5">
    <div class="flex items-center gap-1.5 py-2">
      <i class="pi pi-home text-slate-500 text-sm"></i>
      <i class="pi pi-chevron-right text-slate-400 text-sm"></i>
      <span class="text-sm text-slate-500">Projekt1</span>
      <i class="pi pi-chevron-right text-slate-400 text-sm"></i>
      <div class="flex items-center gap-1.5">
        <i class="pi pi-table text-slate-500 text-sm"></i>
        <span class="text-sm text-slate-500">Gruppe1</span>
      </div>
      <i class="pi pi-chevron-right text-slate-400 text-sm"></i>
    </div>

    <div>
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        @click="toggleMenu"
      />
      <Menu ref="menuRef" :model="menuItems" popup />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menuRef = ref()
const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const toggleMenu = (event) => {
  menuRef.value.toggle(event)
}
</script>