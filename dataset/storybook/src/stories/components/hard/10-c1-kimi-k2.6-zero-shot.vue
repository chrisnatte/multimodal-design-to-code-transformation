<template>
  <div class="p-8">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-gray-200 text-gray-600" />
            <span class="text-gray-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-full max-w-xs">
            <div class="flex justify-between text-xs text-gray-600">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" />
          </div>
        </template>
      </Column>

      <Column field="action" header="Aktion">
        <template #body>
          <Button icon="pi pi-ellipsis-h" rounded text class="text-gray-600" @click="toggleMenu" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" :model="menuItems" popup />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menu = ref()

const menuItems = ref([
  { label: 'Profil bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status ändern', icon: 'pi pi-flag' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Deaktivieren', icon: 'pi pi-trash' }
])

const toggleMenu = (event) => {
  menu.value.toggle(event)
}

const users = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warning',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warning',
    progressLabel: 'Onboarding',
    progress: 11
  }
])
</script>