<template>
  <div class="flex items-center gap-1">
    <Breadcrumb :home="home" :model="items" />
    <Button type="button" label="Dashboard anzeigen" severity="secondary" @click="menu?.toggle" />
  </div>
  <Menu ref="menu" :model="menuItems" :popup="true" />
</template>

<script setup lang="ts">
  import Menu from 'primevue/menu'
  import Button from 'primevue/button'
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import type { MenuItem } from 'primevue/menuitem'

  const home = ref<MenuItem>({
    icon: 'pi pi-home',
  })
  const items = ref<MenuItem[]>([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
    {},
  ])

  const menu = useTemplateRef('menu')

  const menuItems = ref([
    {
      label: 'Dashboard1',
    },
    {
      label: 'Dashboard2',
    },
  ])
</script>
