<template>
  <div class="relative flex w-fit items-start p-8">
    <Breadcrumb :home="home" :model="breadcrumbItems">
      <template #item="{ item, props }">
        <Button
          v-if="item.dashboard"
          v-bind="props.action"
          :label="item.label"
          severity="secondary"
          text
          class="!bg-slate-100 !px-3 !py-2 !text-sm !font-normal !text-slate-600"
          aria-haspopup="true"
          @click="menuVisible = !menuVisible"
        />
        <a
          v-else
          v-bind="props.action"
          class="flex items-center gap-2 text-sm text-slate-500 no-underline"
        >
          <i v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>

    <Menu
      v-if="menuVisible"
      :model="dashboardItems"
      class="absolute left-[265px] top-[70px] z-10 w-44"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menuVisible = ref(true)

const home = {
  icon: 'pi pi-home',
}

const breadcrumbItems = [
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' },
  { label: 'Dashboard anzeigen', dashboard: true },
]

const dashboardItems = [
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' },
]
</script>