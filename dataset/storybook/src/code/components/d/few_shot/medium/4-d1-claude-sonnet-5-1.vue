<template>
  <div class="flex items-center gap-1 p-6">
    <Breadcrumb :model="breadcrumbItems" :pt="{ root: '!p-3.5 !bg-transparent' }">
      <template #item="{ item }">
        <span class="flex items-center gap-1.5 text-sm text-slate-700">
          <i v-if="item.icon" :class="item.icon" class="text-sm" />
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>
    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      @click="menu?.toggle"
      aria-haspopup="true"
      aria-controls="dashboard-menu"
    />
    <Menu id="dashboard-menu" ref="menu" :model="dashboardItems" popup />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbItems = ref([
    { icon: 'pi pi-home' },
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ])

  const dashboardItems = ref([{ label: 'Dashboard 1' }, { label: 'Dashboard 2' }])

  const menu = useTemplateRef('menu')
</script>