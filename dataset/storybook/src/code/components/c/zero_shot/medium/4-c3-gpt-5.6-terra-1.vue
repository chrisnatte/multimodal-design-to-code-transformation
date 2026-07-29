<template>
  <div class="flex min-h-44 items-start bg-white px-9 pt-9">
    <div class="relative flex items-start">
      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        class="border-0 bg-transparent p-0 pt-1"
      />

      <div class="relative ml-3">
        <Button
          :label="selectedDashboard"
          severity="secondary"
          size="small"
          @click="menuVisible = !menuVisible"
        />

        <Menu
          v-if="menuVisible"
          :model="dashboardItems"
          class="absolute left-0 top-9 z-10 !w-44"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menuVisible = ref(true)
const selectedDashboard = ref('Dashboard anzeigen')

const home = {
  icon: 'pi pi-home'
}

const breadcrumbItems = [
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]

const dashboardItems = [
  {
    label: 'Dashboard 1',
    command: () => {
      selectedDashboard.value = 'Dashboard 1'
      menuVisible.value = false
    }
  },
  {
    label: 'Dashboard 2',
    command: () => {
      selectedDashboard.value = 'Dashboard 2'
      menuVisible.value = false
    }
  }
]
</script>