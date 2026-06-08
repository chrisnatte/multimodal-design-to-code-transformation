<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 bg-white rounded-md">
      <div class="flex items-center gap-2 py-2">
        <Breadcrumb :home="state.home" :model="state.breadcrumbItems">
          <template #separator>
            <span class="pi pi-chevron-right text-sm"></span>
          </template>
        </Breadcrumb>
      </div>

      <div class="flex">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          type="button"
          @click="toggleMenu"
        />
        <Menu ref="menuRef" :model="state.menuItems" popup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menuRef = ref()

const state = reactive({
  home: { icon: 'pi pi-home' },
  breadcrumbItems: [
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' }
  ],
  menuItems: [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
  ]
})

const toggleMenu = (event) => {
  menuRef.value.toggle(event)
}
</script>