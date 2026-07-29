<template>
  <div class="flex w-[479px] flex-col gap-2.5 bg-white p-6">
    <div class="relative flex items-start gap-1">
      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        aria-label="Navigation"
        :pt="{
          root: 'rounded-md bg-white !p-3.5',
          list: '!gap-1.5',
          item: 'text-sm',
          separator: 'text-sm',
        }"
      />
      <div class="relative">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          size="small"
          aria-haspopup="true"
          aria-controls="dashboard-menu"
          @click="isDashboardMenuVisible = !isDashboardMenuVisible"
        />
        <Menu
          v-if="isDashboardMenuVisible"
          id="dashboard-menu"
          :model="dashboardItems"
          class="absolute left-0 top-[35px] z-10 w-[175px] shadow-md"
          :pt="{
            root: '!rounded-md',
            list: '!gap-0.5 !p-1',
            itemContent: '!rounded',
            itemLink: '!px-2.5 !py-1.5',
          }"
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

const isDashboardMenuVisible = ref(true)

const home = ref({
  icon: 'pi pi-home',
})

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' },
])

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' },
])
</script>