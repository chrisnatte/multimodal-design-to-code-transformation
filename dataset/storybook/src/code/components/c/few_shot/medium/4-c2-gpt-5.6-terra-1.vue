<template>
  <div class="relative flex h-36 items-start p-9">
    <Breadcrumb :home="home" :model="breadcrumbs" aria-label="Navigation">
      <template #item="{ item, props }">
        <Button
          v-if="item.label === 'Dashboard anzeigen'"
          :label="item.label"
          severity="secondary"
          size="small"
          class="!px-3 !py-2"
          v-bind="props.action"
        />
        <a v-else class="flex items-center gap-2 no-underline" v-bind="props.action">
          <span v-if="item.icon" :class="[item.icon, 'text-surface-500 text-sm']" />
          <span class="text-sm text-surface-500">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>

    <Menu
      :model="dashboards"
      class="absolute left-[16.5rem] top-[4.4rem] w-44 shadow-md"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = ref({
  icon: 'pi pi-home',
})

const breadcrumbs = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' },
  { label: 'Dashboard anzeigen' },
])

const dashboards = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' },
])
</script>