<template>
  <DataTable :value="users">
    <Column field="name" header="Nutzer" style="width: 384px">
      <template #body="{ data }">
        <div class="flex items-center gap-3">
          <Avatar :label="data.name.charAt(0)" shape="circle" />
          <span>{{ data.name }}</span>
        </div>
      </template>
    </Column>
    <Column field="role" header="Rolle" style="width: 224px">
      <template #body="{ data }">
        <Tag :value="data.role" :severity="getRoleSeverity(data.role)" />
      </template>
    </Column>
    <Column field="active" header="Aktiv" style="width: 108px" headerClass="text-center" bodyClass="text-center">
      <template #body="{ data }">
        <Checkbox v-model="data.active" binary />
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const users = ref([
  { name: 'Max Mustermann', role: 'Administrator', active: true },
  { name: 'Anna Schmidt', role: 'Projektleiter', active: true },
  { name: 'Lisa Weber', role: 'Gast', active: false },
  { name: 'Paul Müller', role: 'Gast', active: true }
])

function getRoleSeverity(role) {
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