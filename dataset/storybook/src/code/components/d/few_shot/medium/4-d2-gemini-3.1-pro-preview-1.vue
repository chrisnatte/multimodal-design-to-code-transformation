<template>
  <div class="p-6">
    <Breadcrumb :home="home" :model="items" class="w-fit !rounded-md !bg-white !p-3.5">
      <template #item="{ item }">
        <Button
          v-if="item.isButton"
          :label="item.label"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="dashboard-menu"
          class="!px-3 !py-1.5 !text-sm"
          @click="toggleMenu"
        />
        <a v-else class="flex cursor-pointer items-center gap-1.5 text-slate-500 hover:text-slate-700">
          <span v-if="item.icon" :class="item.icon"></span>
          <span v-if="item.label" class="text-sm">{{ item.label }}</span>
        </a>
      </template>
      <template #separator>
        <i class="pi pi-chevron-right text-xs text-slate-400"></i>
      </template>
    </Breadcrumb>
    <Menu ref="menu" id="dashboard-menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const home = ref({ icon: 'pi pi-home' })
  const items = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
    { label: 'Dashboard anzeigen', isButton: true },
  ])

  const menu = ref()
  const menuItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ])

  const toggleMenu = (event: Event) => {
    menu.value?.toggle(event)
  }
</script>