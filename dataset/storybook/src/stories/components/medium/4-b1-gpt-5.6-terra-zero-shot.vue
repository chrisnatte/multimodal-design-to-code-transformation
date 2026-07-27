<template>
  <div class="flex w-fit flex-row gap-1">
    <div class="flex h-32 w-[431px] flex-row gap-[7px] rounded-md bg-white p-[14px]">
      <div class="flex h-[30px] items-center py-2">
        <Breadcrumb
          :home="home"
          :model="breadcrumbItems"
          class="border-0 bg-transparent p-0"
        >
          <template #separator>
            <i class="pi pi-chevron-right text-[14px] text-surface-500" />
          </template>
        </Breadcrumb>
        <i class="pi pi-chevron-right ml-[7px] text-[14px] text-surface-500" />
      </div>

      <div class="flex w-[175px] flex-col">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          class="h-[33px] w-[161px] whitespace-nowrap text-sm"
        />

        <Menu
          :model="dashboardItems"
          class="mt-[2px] w-[175px] rounded-md border border-surface-200"
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

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  {
    label: 'Projekt1'
  },
  {
    label: 'Gruppe1',
    icon: 'pi pi-table'
  }
])

const dashboardItems = ref([
  {
    label: 'Dashboard 1'
  },
  {
    label: 'Dashboard 2'
  }
])
</script>