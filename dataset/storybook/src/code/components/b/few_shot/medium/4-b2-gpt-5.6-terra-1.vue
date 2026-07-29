<template>
  <div class="flex w-[479px] flex-col gap-2.5 bg-white p-6">
    <div class="flex gap-1">
      <div class="flex w-full items-start gap-2 rounded-md bg-white p-3.5">
        <Breadcrumb :home="home" :model="breadcrumbItems" class="flex-1 py-2" />
        <div class="relative">
          <Button
            label="Dashboard anzeigen"
            severity="secondary"
            aria-haspopup="true"
            aria-controls="dashboard-menu"
          />
          <Menu
            id="dashboard-menu"
            :model="dashboardItems"
            class="absolute right-0 top-[35px] z-10 w-[175px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = ref({
  icon: 'pi pi-home',
})

const breadcrumbItems = ref([
  {
    label: 'Projekt1',
  },
  {
    label: 'Gruppe1',
    icon: 'pi pi-table',
  },
])

const dashboardItems = ref([
  {
    label: 'Dashboard 1',
  },
  {
    label: 'Dashboard 2',
  },
])
</script>