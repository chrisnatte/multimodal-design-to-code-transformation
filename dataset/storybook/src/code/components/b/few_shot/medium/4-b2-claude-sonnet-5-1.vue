<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex items-center gap-1">
      <Breadcrumb :model="breadcrumbItems" class="!p-3.5">
        <template #item="{ item }">
          <span class="flex items-center gap-1">
            <i v-if="item.icon" :class="item.icon" />
            <span v-if="item.label">{{ item.label }}</span>
          </span>
        </template>
      </Breadcrumb>
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        aria-haspopup="true"
        aria-controls="dashboard-menu"
        @click="dashboardMenu?.toggle"
      />
      <Menu ref="dashboard-menu" id="dashboard-menu" :model="dashboardOptions" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbItems = [
    { icon: 'pi pi-home' },
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ]

  const dashboardMenu = useTemplateRef('dashboard-menu')
  const dashboardOptions = [{ label: 'Dashboard 1' }, { label: 'Dashboard 2' }]
</script>