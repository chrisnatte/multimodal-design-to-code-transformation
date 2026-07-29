<template>
  <div class="p-6">
    <DataTable :value="users" class="w-full">
      <Column header="Nutzer" class="w-1/2">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600 font-medium" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Rolle" class="w-1/4">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
        </template>
      </Column>
      <Column header="Aktiv" class="w-1/4">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const users = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    active: true
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    active: true
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    active: false
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    active: true
  }
])

const getRoleSeverity = (role: string) => {
  switch (role) {
    case 'Administrator':
      return 'danger'
    case 'Projektleiter':
      return 'info'
    case 'Gast':
      return 'warn'
    default:
      return 'secondary'
  }
}
</script>