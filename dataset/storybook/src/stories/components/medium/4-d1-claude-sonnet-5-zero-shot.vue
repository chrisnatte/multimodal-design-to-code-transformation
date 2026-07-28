<template>
  <div class="flex flex-row items-center gap-1 p-3.5 bg-white rounded-md">
    <Breadcrumb :model="breadcrumbItems" class="p-0 border-none bg-transparent">
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-sm text-gray-600">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <Menu ref="menu" :model="menuItems" :popup="true" />
    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      @click="toggleMenu"
      class="whitespace-nowrap"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Menu from 'primevue/menu'
import Button from 'primevue/button'

const breadcrumbItems = ref([
  { label: '', icon: 'pi pi-home' },
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const menu = ref()

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>