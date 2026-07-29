<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex gap-1">
      <div class="flex items-center gap-[7px] rounded-md bg-white p-[14px]">
        <div class="flex items-center gap-[7px] py-2">
          <Breadcrumb
            :home="home"
            :model="items"
            :pt="{ root: '!p-0 !bg-transparent !border-none' }"
          >
            <template #item="{ item }">
              <a class="flex cursor-pointer items-center gap-2 text-sm">
                <span v-if="item.icon" :class="item.icon"></span>
                <span v-if="item.label">{{ item.label }}</span>
              </a>
            </template>
          </Breadcrumb>
        </div>
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="dashboard-menu"
          @click="toggleMenu"
        />
        <Menu ref="menu" id="dashboard-menu" :model="menuItems" popup />
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

  const menuItems = ref([{ label: 'Dashboard 1' }, { label: 'Dashboard 2' }])

  const menu = ref()
  const toggleMenu = (event: Event) => {
    menu.value?.toggle(event)
  }
</script>