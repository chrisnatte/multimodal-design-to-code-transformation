<template>
  <div class="relative flex h-32 w-[431px] gap-1 rounded-md bg-white p-[14px]">
    <Breadcrumb
      :home="home"
      :model="breadcrumbItems"
      class="h-[30px] !border-0 !bg-transparent !p-0"
    >
      <template #separator>
        <i class="pi pi-chevron-right text-[14px] text-slate-400" />
      </template>
    </Breadcrumb>

    <div class="relative">
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        class="!h-[33px] !whitespace-nowrap !border-0 !bg-slate-100 !px-3 !py-2 !text-sm !font-medium !text-slate-600"
      />
      <Menu
        :model="dashboardItems"
        class="absolute left-0 top-[35px] z-10 !w-[175px] !rounded-md !border !border-slate-200 !bg-white !p-[3.5px] shadow-md"
      />
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
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])
</script>