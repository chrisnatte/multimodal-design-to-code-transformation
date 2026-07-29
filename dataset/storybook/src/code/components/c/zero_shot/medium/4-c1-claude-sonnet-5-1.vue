<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-gray-500">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <Button
      label="Dashboard anzeigen"
      icon="pi pi-chevron-down"
      iconPos="right"
      severity="secondary"
      outlined
      @click="toggleMenu"
      aria-haspopup="true"
      aria-controls="dashboard_menu"
    />
    <Menu id="dashboard_menu" ref="menu" :model="dashboardItems" :popup="true" />
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

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const menu = ref()

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>