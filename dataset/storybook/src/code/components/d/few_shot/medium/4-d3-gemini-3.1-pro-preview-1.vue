<template>
  <div class="flex items-center p-6">
    <Breadcrumb :home="home" :model="items" class="!bg-transparent !p-0 !border-none">
      <template #item="{ item }">
        <a class="cursor-pointer flex items-center gap-1.5 text-slate-500 hover:text-slate-700 text-sm">
          <span v-if="item.icon" :class="item.icon"></span>
          <span v-if="item.label">{{ item.label }}</span>
        </a>
      </template>
      <template #separator>
        <i class="pi pi-chevron-right text-slate-400 text-xs mx-2"></i>
      </template>
    </Breadcrumb>
    
    <i class="pi pi-chevron-right text-slate-400 text-xs mx-2"></i>
    
    <div>
      <Button 
        type="button" 
        label="Dashboard anzeigen" 
        severity="secondary" 
        @click="toggleMenu" 
        aria-haspopup="true" 
        aria-controls="dashboard_menu"
      />
      <Menu ref="menu" id="dashboard_menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = ref({
  icon: 'pi pi-home'
})

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' }
])

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const menu = ref<InstanceType<typeof Menu> | null>(null)

const toggleMenu = (event: Event) => {
  menu.value?.toggle(event)
}
</script>