<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <div class="flex items-center gap-1">
      <div class="flex items-center rounded-md p-3.5 gap-1.5">
        <Breadcrumb :model="breadcrumbItems" :home="breadcrumbHome">
          <template #item="{ item }">
            <a class="flex items-center gap-1.5 text-gray-700 no-underline">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </a>
          </template>
        </Breadcrumb>

        <Menu ref="menu" :model="dashboardItems" :popup="true" />
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

const breadcrumbHome = ref({
  icon: 'pi pi-home',
  url: '#'
})

const breadcrumbItems = ref([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
])

const dashboardItems = ref([
  { label: 'Dashboard 1', command: () => {} },
  { label: 'Dashboard 2', command: () => {} }
])

const menu = ref(null)

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>