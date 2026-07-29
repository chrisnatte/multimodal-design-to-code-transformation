<template>
  <div class="flex h-44 w-[479px] flex-col gap-2.5 bg-white p-6">
    <div class="flex gap-1">
      <div class="flex items-start gap-[7px] rounded-md bg-white p-3.5">
        <Breadcrumb :home="home" :model="breadcrumbItems" class="!border-0 !bg-transparent !p-0">
          <template #separator>
            <span class="pi pi-chevron-right text-xs" />
          </template>
        </Breadcrumb>

        <div class="flex w-44 flex-col gap-0.5">
          <Button
            label="Dashboard anzeigen"
            severity="secondary"
            class="w-[161px] !justify-start"
          />
          <Menu :model="dashboardItems" class="w-[175px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = {
  icon: 'pi pi-home',
}

const breadcrumbItems = [
  {
    label: 'Projekt1',
  },
  {
    label: 'Gruppe1',
    icon: 'pi pi-table',
  },
]

const dashboardItems = [
  {
    label: 'Dashboard 1',
  },
  {
    label: 'Dashboard 2',
  },
]
</script>