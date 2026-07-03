<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 rounded-md bg-white">
      <div class="flex items-center gap-2 py-2">
        <Breadcrumb :home="home" :model="breadcrumbItems" />
      </div>
      <div>
        <Button label="Dashboard anzeigen" severity="secondary" />
        <Menu :model="menuItems" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const form = reactive({})

const home = reactive({
  icon: 'pi pi-home'
})

const breadcrumbItems = reactive([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menuItems = reactive([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])
</script>