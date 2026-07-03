<template>
  <div class="min-h-[176px] w-full bg-[#f3f4f6] flex items-start px-10 py-10">
    <div class="flex items-start gap-4">
      <Breadcrumb :home="home" :model="items" class="text-slate-500">
        <template #separator>
          <span class="pi pi-chevron-right text-slate-400 text-sm"></span>
        </template>
      </Breadcrumb>

      <Menu :model="dashboardItems" class="w-[180px] shadow-md">
        <template #start>
          <Button
            label="Dashboard anzeigen"
            severity="secondary"
            class="w-full !justify-start"
          />
        </template>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const state = reactive({
  selectedDashboard: null
})

const home = reactive({
  icon: 'pi pi-home'
})

const items = reactive([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const dashboardItems = reactive([
  {
    label: 'Dashboard 1',
    command: () => {
      state.selectedDashboard = 'Dashboard 1'
    }
  },
  {
    label: 'Dashboard 2',
    command: () => {
      state.selectedDashboard = 'Dashboard 2'
    }
  }
])
</script>