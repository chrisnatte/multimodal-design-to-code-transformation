<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :model="breadcrumbItems" class="bg-transparent border-none p-0">
      <template #item="{ item, props }">
        <a v-if="item.url" v-bind="props.action" :href="item.url" class="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <span v-if="item.icon" :class="item.icon"></span>
          <span class="text-sm">{{ item.label }}</span>
        </a>
        <span v-else class="flex items-center gap-2 text-gray-500">
          <span v-if="item.icon" :class="item.icon"></span>
          <span class="text-sm">{{ item.label }}</span>
        </span>
      </template>
      <template #separator>
        <span class="text-gray-400 mx-1">></span>
      </template>
    </Breadcrumb>

    <div class="relative">
      <Button
        ref="dashboardButton"
        label="Dashboard anzeigen"
        severity="secondary"
        class="rounded-md text-sm px-3 py-1.5"
        @click="toggleMenu"
      />
      <Menu
        ref="dashboardMenu"
        :model="dashboardItems"
        popup
        class="mt-1"
      >
        <template #item="{ item }">
          <span class="text-sm text-gray-700 block px-3 py-2">{{ item.label }}</span>
        </template>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const dashboardMenu = ref()
const dashboardButton = ref()

const breadcrumbItems = ref([
  { icon: 'pi pi-home', url: '/' },
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-th-large', url: '#' }
])

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const toggleMenu = (event) => {
  dashboardMenu.value.toggle(event)
}
</script>