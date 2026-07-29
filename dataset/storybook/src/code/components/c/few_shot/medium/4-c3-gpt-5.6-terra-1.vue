<template>
  <div class="relative flex h-44 w-xl items-start p-9">
    <Breadcrumb :home="home" :model="breadcrumbs" class="!bg-transparent !p-0">
      <template #item="{ item, props }">
        <Button
          v-if="item.label === 'Dashboard anzeigen'"
          :label="item.label"
          severity="secondary"
          size="small"
          v-bind="props.action"
          class="!bg-surface-100 !px-3 !py-2 !text-sm"
          @click="isDashboardMenuVisible = !isDashboardMenuVisible"
        />
        <a
          v-else
          v-ripple
          class="flex cursor-pointer items-center gap-1 text-sm text-surface-500"
          v-bind="props.action"
        >
          <span v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </template>
      <template #separator>
        <span class="pi pi-angle-right text-xs text-surface-400" />
      </template>
    </Breadcrumb>

    <Menu
      v-if="isDashboardMenuVisible"
      :model="dashboardItems"
      class="absolute left-[265px] top-[70px] w-44 shadow-md"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const isDashboardMenuVisible = ref(true)

const home = {
  icon: 'pi pi-home',
}

const breadcrumbs = [
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' },
  { label: 'Dashboard anzeigen' },
]

const dashboardItems = [
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' },
]
</script>