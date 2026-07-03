<template>
  <div class="flex p-4 bg-[#f5f6f8] min-h-[176px]">
    <div class="flex items-start gap-1">
      <div class="bg-white rounded-md p-3.5 flex items-center gap-2">
        <Breadcrumb :home="home" :model="breadcrumbItems" class="!p-0 !bg-transparent">
          <template #item="{ item, props }">
            <a v-bind="props.action" class="flex items-center gap-1 text-slate-500">
              <i v-if="item.icon" :class="item.icon" class="text-sm"></i>
              <span class="text-[28px] leading-none mx-1 text-slate-400" v-if="item.separator">›</span>
              <span v-if="item.label" class="text-sm">{{ item.label }}</span>
            </a>
          </template>
          <template #separator>
            <span class="text-slate-400 mx-1">›</span>
          </template>
        </Breadcrumb>

        <div class="relative">
          <Button
            label="Dashboard anzeigen"
            severity="secondary"
            @click="toggleMenu"
            aria-haspopup="true"
            aria-controls="dashboard_menu"
          />
          <Menu
            ref="menuRef"
            id="dashboard_menu"
            :model="menuItems"
            :popup="true"
            class="mt-1 min-w-[176px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const state = reactive({
  selectedDashboard: null
})

const menuRef = ref()

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const menuItems = ref([
  {
    label: 'Dashboard 1',
    command: () => {
      state.selectedDashboard = 'Dashboard 1'
    }
  },
  {
    label: 'Dashboard 2',
    command: () => {
      state.selectedDashboard = 'Dashboard 2'
    }
  }
])

const toggleMenu = (event) => {
  menuRef.value.toggle(event)
}
</script>