<template>
  <div class="p-6">
    <DataTable :value="users" class="w-full">
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="bg-gray-100 text-gray-600" />
            <span class="text-gray-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" rounded />
        </template>
      </Column>

      <Column header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-64">
            <div class="flex justify-between text-sm text-gray-500">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktion">
        <template #body="{ data, index }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, index)"
          />
          <Menu :ref="(el) => setMenuRef(el, index)" :model="menuItems" :popup="true" />
        </template>
      </Column>
    </DataTable>
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

const users = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progressValue: 45
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progressValue: 87
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 4
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 11
  }
])

const menuItems = ref([
  { label: 'Profil bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status ändern', icon: 'pi pi-flag' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Deaktiveren', icon: 'pi pi-trash' }
])

const menuRefs = ref([])

const setMenuRef = (el, index) => {
  menuRefs.value[index] = el
}

const toggleMenu = (event, index) => {
  menuRefs.value[index].toggle(event)
}
</script>