<template>
  <div class="flex items-center gap-2">
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
    <Menu id="dashboard-menu" ref="dashboard-menu" :model="dashboardOptions" popup />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const home = ref({
    icon: 'pi pi-home',
    url: '/',
  })

  const items = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ])

  const dashboardMenu = useTemplateRef('dashboard-menu')
  const dashboardOptions = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ])
</script>