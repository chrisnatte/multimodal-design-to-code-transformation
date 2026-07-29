<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex gap-1">
      <div class="flex gap-2 p-3.5 bg-white rounded-md items-center">
        <div class="flex items-center gap-2 py-2">
          <Breadcrumb :model="breadcrumbItems" :home="breadcrumbHome">
            <template #item="{ item }">
              <span class="flex items-center gap-1">
                <i v-if="item.icon" :class="item.icon"></i>
                <span v-if="item.label">{{ item.label }}</span>
              </span>
            </template>
          </Breadcrumb>
        </div>

        <Menu ref="menu" :model="menuItems" :popup="true" />
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          @click="toggleMenu"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menu = ref()

const breadcrumbHome = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menuItems = ref([
  {
    label: 'Dashboard 1',
    command: () => {}
  },
  {
    label: 'Dashboard 2',
    command: () => {}
  }
])

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>