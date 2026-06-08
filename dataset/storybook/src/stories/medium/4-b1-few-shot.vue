<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 rounded-md">
      <div class="flex items-center gap-2 py-2">
        <Breadcrumb :home="home" :model="items" />
      </div>
      <div class="flex flex-col">
        <Button label="Dashboard anzeigen" severity="secondary" @click="toggleMenu" />
        <Menu ref="menuRef" :model="menuItems" :popup="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const form = reactive({})

const home = reactive({
  icon: 'pi pi-home'
})

const items = reactive([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menuItems = reactive([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const menuRef = ref()

const toggleMenu = (event) => {
  menuRef.value.toggle(event)
}
</script>