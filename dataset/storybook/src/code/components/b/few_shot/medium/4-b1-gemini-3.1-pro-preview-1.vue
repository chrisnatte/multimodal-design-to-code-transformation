<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-row gap-1">
      <div class="flex flex-row items-center gap-2 rounded-md bg-white p-3.5">
        <Breadcrumb :home="home" :model="items" class="!border-none !bg-transparent !p-0" />
        
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="dashboard-menu"
          @click="menu?.toggle"
        />
        <Menu
          ref="menu"
          id="dashboard-menu"
          :model="menuItems"
          popup
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = ref({
  icon: 'pi pi-home'
})

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menu = useTemplateRef('menu')

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])
</script>