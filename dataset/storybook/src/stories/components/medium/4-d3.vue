<template>
  <div class="min-h-[176px] bg-[#f5f5f5] p-8">
    <div class="flex items-start gap-1">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !border-0 !p-0">
        <template #item="{ item, props }">
          <a v-bind="props.action" class="flex items-center gap-2 text-slate-500 hover:text-slate-700">
            <i v-if="item.icon" :class="item.icon" class="text-sm"></i>
            <span class="text-2 leading-none">{{ item.label }}</span>
          </a>
        </template>
        <template #separator>
          <i class="pi pi-angle-right text-slate-400 text-xs"></i>
        </template>
      </Breadcrumb>

      <div class="flex flex-col gap-1">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          @click="state.menuOpen = !state.menuOpen"
          class="!px-4 !py-2 !text-slate-700"
        />
        <Menu v-if="state.menuOpen" :model="menuItems" class="w-[178px] shadow-md" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const state = reactive({
  menuOpen: true
})

const home = reactive({
  icon: 'pi pi-home',
  url: '#'
})

const breadcrumbItems = reactive([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
])

const menuItems = reactive([
  { label: 'Dashboard 1', command: () => (state.menuOpen = false) },
  { label: 'Dashboard 2', command: () => (state.menuOpen = false) }
])
</script>