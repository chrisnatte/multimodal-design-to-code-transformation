<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-1">
      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        :pt="{
          root: 'rounded-md bg-white p-3.5',
          list: 'gap-1.5',
          itemLink: 'py-2',
        }"
      >
        <template #item="{ item, props }">
          <a v-bind="props.action" class="flex items-center gap-1.5">
            <span v-if="item.icon" :class="item.icon" />
            <span v-if="item.label">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>

      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        class="mt-3.5"
      />

      <div class="mt-12 w-44 rounded-md border border-surface-200 bg-white">
        <Menu :model="dashboardItems" class="w-full border-0">
          <template #item="{ item, props }">
            <a v-bind="props.action" class="flex w-full items-center px-2.5 py-1.5">
              <span>{{ item.label }}</span>
            </a>
          </template>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = {
  icon: 'pi pi-home',
}

const breadcrumbItems = [
  {
    label: 'Projekt1',
  },
  {
    label: 'Gruppe1',
    icon: 'pi pi-table',
  },
]

const dashboardItems = [
  {
    label: 'Dashboard 1',
  },
  {
    label: 'Dashboard 2',
  },
]
</script>