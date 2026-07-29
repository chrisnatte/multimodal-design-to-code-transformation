<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :home="home" :model="items" />
    <Button
      label="Dashboard anzeigen"
      icon="pi pi-chevron-down"
      icon-pos="right"
      severity="secondary"
      text
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

  const home = {
    icon: 'pi pi-home',
  }

  const items = [
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-th-large' },
  ]

  const dashboardMenu = useTemplateRef('dashboard-menu')

  const dashboardOptions = [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ]
</script>