<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row gap-[7px] p-[14px] bg-white rounded-md">
      <div class="flex flex-row items-center gap-[7px] py-2">
        <Breadcrumb :home="home" :model="items" class="border-none bg-transparent p-0" />
      </div>
      <div>
        <Button label="Dashboard anzeigen" severity="secondary" @click="toggleMenu" />
        <Menu ref="menu" :model="menuItems" :popup="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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

const menu = ref()
const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>