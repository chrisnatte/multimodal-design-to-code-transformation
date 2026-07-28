<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :model="breadcrumbItems" class="border-0 bg-transparent p-0">
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-gray-500">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-gray-400"></i>
      </template>
    </Breadcrumb>

    <div class="relative">
      <Button
        label="Dashboard anzeigen"
        icon="pi pi-chevron-down"
        iconPos="right"
        text
        class="text-gray-700 bg-gray-100 rounded-md"
        @click="toggleMenu"
      />
      <Menu ref="menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const breadcrumbItems = ref([
  { label: '', icon: 'pi pi-home' },
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' }
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