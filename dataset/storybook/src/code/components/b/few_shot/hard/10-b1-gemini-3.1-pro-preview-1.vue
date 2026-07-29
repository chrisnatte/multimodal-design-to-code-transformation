<template>
  <div class="bg-white p-6">
    <DataTable :value="users" class="w-full max-w-4xl">
      <Column header="Nutzer" class="w-64">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-700" />
            <span class="text-sm text-slate-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" class="w-28">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column header="Fortschritt" class="w-64">
        <template #body="{ data }">
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-center justify-between text-xs text-slate-700">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen" class="w-28">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="toggleMenu"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="menu"
      id="actions-menu"
      :model="menuItems"
      :popup="true"
      :pt="{
        root: 'w-48 p-2.5',
        list: 'flex flex-col gap-2',
      }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const users = ref([
    {
      name: 'Max Mustermann',
      initials: 'M',
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progressValue: 45,
    },
    {
      name: 'Anna Schmidt',
      initials: 'A',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progressValue: 87,
    },
    {
      name: 'Lisa Weber',
      initials: 'L',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progressValue: 4,
    },
    {
      name: 'Paul Müller',
      initials: 'P',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progressValue: 11,
    },
  ])

  const menu = useTemplateRef('menu')

  const menuItems = ref([
    { label: 'Profil bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status ändern', icon: 'pi pi-flag' },
    { label: 'Duplizieren', icon: 'pi pi-clone' },
    { label: 'Deaktiveren', icon: 'pi pi-trash' },
  ])

  const toggleMenu = (event: Event) => {
    menu.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'In Prüfung':
        return 'danger'
      case 'Aktiv':
        return 'success'
      case 'Inaktiv':
        return 'warn'
      default:
        return 'info'
    }
  }
</script>