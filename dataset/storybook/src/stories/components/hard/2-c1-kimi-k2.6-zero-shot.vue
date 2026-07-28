<template>
  <div class="p-8 bg-white min-h-screen">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initials" shape="circle" class="bg-slate-200 text-slate-700" />
            <span class="text-slate-700">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="getSeverity(slotProps.data.role)" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
        <template #body="slotProps">
          <div class="flex justify-start">
            <Checkbox v-model="slotProps.data.active" binary />
          </div>
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
import Checkbox from 'primevue/checkbox'

const users = ref([
  { name: 'Max Mustermann', initials: 'M', role: 'Administrator', active: true },
  { name: 'Anna Schmidt', initials: 'A', role: 'Projektleiter', active: true },
  { name: 'Lisa Weber', initials: 'L', role: 'Gast', active: false },
  { name: 'Paul Müller', initials: 'P', role: 'Gast', active: true }
])

const getSeverity = (role) => {
  switch (role) {
    case 'Administrator':
      return 'danger'
    case 'Projektleiter':
      return 'info'
    case 'Gast':
      return 'warning'
    default:
      return null
  }
}
</script>