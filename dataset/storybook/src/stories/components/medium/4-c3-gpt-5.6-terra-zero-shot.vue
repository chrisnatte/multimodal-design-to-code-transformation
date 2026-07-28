<template>
  <div class="flex items-start px-10 py-9">
    <Breadcrumb :home="home" :model="breadcrumbItems" class="border-0 bg-transparent p-0">
      <template #item="{ item }">
        <Button
          v-if="item.label === 'Dashboard anzeigen'"
          :label="item.label"
          text
          severity="secondary"
          class="!rounded-md !bg-slate-100 !px-3 !py-2 !text-sm !font-medium !text-slate-600"
          @click="dashboardMenu.toggle($event)"
        />
        <span v-else class="text-sm text-slate-500">{{ item.label }}</span>
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-xs text-slate-400" />
      </template>
    </Breadcrumb>

    <Menu ref="dashboardMenu" :model="dashboardItems" popup class="!mt-9 !w-44 !shadow-md" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const dashboardMenu = ref()

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { icon: 'pi pi-table', label: 'Gruppe1' },
  { label: 'Dashboard anzeigen' }
])

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])
</script>