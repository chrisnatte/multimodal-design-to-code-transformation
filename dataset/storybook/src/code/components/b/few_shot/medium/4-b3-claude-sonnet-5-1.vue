<template>
  <div class="flex w-fit items-center gap-1 rounded-md bg-white p-3.5">
    <Breadcrumb :home="home" :model="items" />
    <Menu ref="dashboardMenu" id="dashboard-menu" :model="dashboardOptions" popup />
    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      aria-haspopup="true"
      aria-controls="dashboard-menu"
      @click="toggleDashboardMenu"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Menu from 'primevue/menu'
  import Button from 'primevue/button'

  const home = ref({
    icon: 'pi pi-home',
    url: '/',
  })

  const items = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ])

  const dashboardMenu = useTemplateRef('dashboardMenu')
  const dashboardOptions = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ])

  function toggleDashboardMenu(event: Event) {
    dashboardMenu.value?.toggle(event)
  }
</script>