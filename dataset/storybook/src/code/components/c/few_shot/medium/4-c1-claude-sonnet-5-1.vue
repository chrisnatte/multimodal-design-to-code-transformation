<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb
      :home="home"
      :model="breadcrumbItems"
      :pt="{
        root: '!bg-transparent !border-none !p-0',
      }"
    >
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-gray-500">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>
    <Button
      label="Dashboard anzeigen"
      icon="pi pi-chevron-down"
      icon-pos="right"
      severity="secondary"
      outlined
      aria-haspopup="true"
      aria-controls="dashboard-menu"
      @click="dashboardMenu?.toggle"
    />
    <Menu id="dashboard-menu" ref="dashboard-menu" :model="dashboardOptions" popup />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const home = ref({
    icon: 'pi pi-home',
  })

  const breadcrumbItems = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-th-large' },
  ])

  const dashboardMenu = useTemplateRef('dashboard-menu')
  const dashboardOptions = ref([{ label: 'Dashboard 1' }, { label: 'Dashboard 2' }])
</script>