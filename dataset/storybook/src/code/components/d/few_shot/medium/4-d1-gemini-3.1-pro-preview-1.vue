<template>
  <div class="flex flex-col gap-2.5 p-6">
    <div class="flex items-center gap-1">
      <Breadcrumb
        :model="breadcrumbItems"
        :pt="{
          root: 'bg-white p-3.5 rounded-md',
          menu: 'flex items-center gap-1.5 py-2',
          action: 'flex items-center gap-1.5 text-sm text-surface-700',
          separator: 'text-surface-400',
        }"
      >
        <template #item="{ item }">
          <a v-if="item.icon" :href="item.url" class="flex items-center gap-1.5">
            <i :class="item.icon"></i>
            <span v-if="item.label">{{ item.label }}</span>
          </a>
          <span v-else>{{ item.label }}</span>
        </template>
      </Breadcrumb>
      <div class="relative">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          @click="toggleMenu"
          aria-haspopup="true"
          aria-controls="dashboard-menu"
          :pt="{
            root: 'bg-surface-100 border-none text-surface-700 font-medium text-sm py-2 px-3',
          }"
        />
        <Menu
          ref="menu"
          id="dashboard-menu"
          :model="menuItems"
          :popup="true"
          :pt="{
            root: 'w-[175px] mt-1 border border-surface-200 rounded-md bg-white',
            list: 'flex flex-col gap-0.5 p-1',
            action: 'text-sm text-surface-700 py-1.5 px-2.5 rounded hover:bg-surface-100',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbItems = ref([
    { icon: 'pi pi-home', url: '#' },
    { label: 'Projekt1' },
    { icon: 'pi pi-table', label: 'Gruppe1' },
  ])

  const menuItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ])

  const menu = ref()

  const toggleMenu = (event: Event) => {
    menu.value.toggle(event)
  }
</script>