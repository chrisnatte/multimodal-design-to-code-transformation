<template>
  <div class="p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="w-[30%]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600" />
            <span class="text-slate-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" class="w-[20%]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" class="w-[40%]">
        <template #body="{ data }">
          <div class="flex w-full max-w-[200px] flex-col gap-1.5">
            <div class="flex items-center justify-between text-xs text-slate-600">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="w-[10%]">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="action-menu"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionMenu"
      id="action-menu"
      :model="menuItems"
      popup
      :pt="{
        list: 'flex flex-col !gap-2 !p-2.5',
      }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          class="w-full !justify-start border-slate-200 text-slate-600 hover:bg-slate-50"
        />
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const users = ref([
  {
    id: 1,
    name: 'Max Mustermann',
    initials: 'M',
    status: 'In Prüfung',
    progressLabel: 'Zertifizierung',
    progress: 45,
  },
  {
    id: 2,
    name: 'Anna Schmidt',
    initials: 'A',
    status: 'Aktiv',
    progressLabel: 'Onboarding',
    progress: 87,
  },
  {
    id: 3,
    name: 'Lisa Weber',
    initials: 'L',
    status: 'Inaktiv',
    progressLabel: 'Onboarding',
    progress: 4,
  },
  {
    id: 4,
    name: 'Paul Müller',
    initials: 'P',
    status: 'Inaktiv',
    progressLabel: 'Onboarding',
    progress: 11,
  },
])

const actionMenu = ref()
const selectedUser = ref()

const menuItems = ref([
  {
    label: 'Profil bearbeiten',
    icon: 'pi pi-file-edit',
  },
  {
    label: 'Status ändern',
    icon: 'pi pi-flag',
  },
  {
    label: 'Duplizieren',
    icon: 'pi pi-copy',
  },
  {
    label: 'Deaktiveren',
    icon: 'pi pi-trash',
  },
])

const toggleMenu = (event: Event, data: any) => {
  selectedUser.value = data
  actionMenu.value.toggle(event)
}

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Aktiv':
      return 'success'
    case 'In Prüfung':
      return 'danger'
    case 'Inaktiv':
      return 'warn'
    default:
      return 'info'
  }
}
</script>