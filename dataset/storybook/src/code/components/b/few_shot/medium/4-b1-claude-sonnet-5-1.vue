<template>
  <div class="flex flex-col gap-2.5 bg-white p-6">
    <div class="flex items-center gap-1">
      <Breadcrumb :model="breadcrumbItems" class="rounded-md">
        <template #item="{ item }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" class="flex items-center gap-1" @click="navigate">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <span v-else class="flex items-center gap-1">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </span>
        </template>
      </Breadcrumb>
      <Menu ref="dashboard-menu" :model="dashboardMenuItems" popup>
        <template #item="{ item }">
          <a class="flex items-center gap-2 px-2 py-1">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        </template>
      </Menu>
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        @click="dashboardMenu?.toggle"
        aria-haspopup="true"
        aria-controls="dashboard-menu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbItems = [
    { icon: 'pi pi-home', route: '/' },
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
  ]

  const dashboardMenu = useTemplateRef('dashboard-menu')
  const dashboardMenuItems = [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' },
  ]
</script>