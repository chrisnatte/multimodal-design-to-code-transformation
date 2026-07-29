<template>
  <div class="flex w-fit flex-col gap-2.5 p-6">
    <div class="flex items-start gap-1">
      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        :pt="{
          root: '!bg-transparent !p-0',
          list: '!gap-1.5',
          itemLink: '!p-0',
        }"
      />
      <div class="flex flex-col">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          class="!h-[33px] !border-0 !bg-surface-100 !px-3 !text-sm"
        />
        <Menu
          :model="dashboards"
          :pt="{
            root: '!mt-0 !w-[175px] !rounded-md !border-surface-200 !p-1 shadow-md',
            list: '!gap-0.5 !p-0',
            itemLink: '!px-2.5 !py-[7px]',
          }"
        />
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
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' },
]

const dashboards = [
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' },
]
</script>