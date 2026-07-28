<template>
  <div class="flex p-[38px]">
    <div class="flex items-start gap-1 rounded-md bg-white p-[14px]">
      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        class="bg-transparent p-0"
      >
        <template #item="{ item, props }">
          <a
            v-bind="props.action"
            class="flex items-center gap-[7px] py-2 text-sm text-slate-500 no-underline"
          >
            <i
              v-if="item.icon"
              :class="[item.icon, 'text-sm']"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </a>
        </template>
        <template #separator>
          <i class="pi pi-chevron-right text-xs text-slate-400" aria-hidden="true" />
        </template>
      </Breadcrumb>

      <i
        class="pi pi-chevron-right mt-[10px] text-xs text-slate-400"
        aria-hidden="true"
      />

      <Button
        ref="menuButton"
        label="Dashboard anzeigen"
        severity="secondary"
        class="h-[33px] whitespace-nowrap px-3 text-sm"
        @click="toggleMenu"
      />

      <Menu
        ref="dashboardMenu"
        :model="dashboardItems"
        popup
        class="w-[175px]"
      />
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const dashboardMenu = ref()
const menuButton = ref()

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
])

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
])

const toggleMenu = (event) => {
  dashboardMenu.value.toggle(event)
}

onMounted(async () => {
  await nextTick()
  dashboardMenu.value.show({
    currentTarget: menuButton.value?.$el
  })
})
</script>