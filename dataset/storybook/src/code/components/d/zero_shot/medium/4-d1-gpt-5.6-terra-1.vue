<template>
  <div class="flex h-44 w-[479px] flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-1">
      <div class="rounded-md bg-white px-3.5 py-3.5">
        <Breadcrumb :home="home" :model="breadcrumbItems" class="p-0" />
      </div>

      <div class="relative pt-3.5">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          class="h-[33px] border-0 bg-slate-100 px-3 text-sm font-medium text-slate-600"
          @click="menuVisible = !menuVisible"
        />
        <Menu
          v-show="menuVisible"
          :model="dashboardItems"
          class="absolute left-0 top-[47px] z-10 w-[175px] shadow-md"
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