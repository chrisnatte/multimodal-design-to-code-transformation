<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 rounded-md bg-white">
      <div class="flex items-center gap-2 py-2">
        <i class="pi pi-home text-sm"></i>
        <i class="pi pi-chevron-right text-sm"></i>
        <span class="text-sm">Projekt1</span>
        <i class="pi pi-chevron-right text-sm"></i>
        <div class="flex items-center gap-1">
          <i class="pi pi-table text-sm"></i>
          <span class="text-sm">Gruppe1</span>
        </div>
        <i class="pi pi-chevron-right text-sm"></i>
      </div>

      <div>
        <Button
          type="button"
          label="Dashboard anzeigen"
          severity="secondary"
          @click="toggleMenu"
        />
        <Menu ref="menuRef" :model="state.menuItems" popup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menuRef = ref()

const state = reactive({
  menuItems: [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
  ]
})

const toggleMenu = (event) => {
  menuRef.value.toggle(event)
}
</script>