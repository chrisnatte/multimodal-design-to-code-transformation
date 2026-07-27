<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row items-center gap-2 p-4 bg-white rounded-md">
      <Breadcrumb :home="home" :model="items" class="p-0" />

      <Menu ref="menu" :model="menuItems" :popup="true" />
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        @click="toggleMenu"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = ref({
  icon: 'pi pi-home',
  url: '#'
})

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menu = ref()
const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

function toggleMenu(event) {
  menu.value.toggle(event)
}
</script>