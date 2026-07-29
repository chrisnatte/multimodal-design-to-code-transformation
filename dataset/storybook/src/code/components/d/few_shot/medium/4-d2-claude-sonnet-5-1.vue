<template>
  <div class="flex items-center gap-1 p-6">
    <Breadcrumb :home="home" :model="breadcrumbItems" />
    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      @click="menu?.toggle"
      aria-haspopup="true"
      aria-controls="dashboard_menu"
    />
    <Menu ref="menu" id="dashboard_menu" :model="menuItems" popup />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const home = ref({
    icon: 'pi pi-home',
  })

  const breadcrumbItems = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ])

  const menu = useTemplateRef('menu')
  const menuItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ])
</script>