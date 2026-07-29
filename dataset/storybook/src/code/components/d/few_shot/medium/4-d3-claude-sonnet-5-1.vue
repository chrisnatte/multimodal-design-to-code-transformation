<template>
  <div class="flex items-center gap-1 p-6">
    <Breadcrumb :home="home" :model="breadcrumbItems" />
    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      aria-haspopup="true"
      aria-controls="dashboard-menu"
      @click="dashboardMenu?.toggle"
    />
    <Menu ref="dashboard-menu" id="dashboard-menu" :model="dashboardOptions" popup />
  </div>
</template>

<script setup lang="ts">
  import { useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const home = { icon: 'pi pi-home' }
  const breadcrumbItems = [
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ]

  const dashboardMenu = useTemplateRef('dashboard-menu')
  const dashboardOptions = [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ]
</script>