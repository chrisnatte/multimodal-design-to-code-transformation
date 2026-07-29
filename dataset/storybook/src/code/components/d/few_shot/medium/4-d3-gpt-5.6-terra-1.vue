<template>
  <div class="flex w-[479px] flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-1">
      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        class="flex-1 !border-0 !bg-white !p-3.5"
      >
        <template #separator>
          <span class="pi pi-chevron-right text-xs text-slate-400" />
        </template>
      </Breadcrumb>

      <div class="relative pt-3.5">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          size="small"
          @click="menuVisible = !menuVisible"
        />
        <Menu
          v-if="menuVisible"
          :model="dashboardItems"
          class="absolute left-0 top-[47px] z-10 w-44 shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menuVisible = ref(true)

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