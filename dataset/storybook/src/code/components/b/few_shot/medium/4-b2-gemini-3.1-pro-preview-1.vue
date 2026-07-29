<template>
  <div class="flex flex-col gap-2.5 bg-white p-6">
    <div class="flex flex-row gap-1">
      <div class="flex flex-row items-center gap-[7px] rounded-md bg-white p-[14px]">
        <div class="flex flex-row items-center gap-[7px] py-2">
          <Breadcrumb :home="home" :model="items" class="!bg-transparent !p-0" />
        </div>
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          @click="toggle"
        />
        <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
      </div>
    </div>
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
  ])

  const menu = ref()
  const menuItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ])

  const toggle = (event: Event) => {
    menu.value?.toggle(event)
  }
</script>