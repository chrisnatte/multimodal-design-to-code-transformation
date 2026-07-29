<template>
  <div class="p-4">
    <DataTable :value="users">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-gray-200 text-gray-700" />
            <span class="text-gray-800">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="active" header="Aktiv">
        <template #body="slotProps">
          <Checkbox v-model="slotProps.data.active" :binary="true" disabled />
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
  { initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
  { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
  { initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
  { initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
])
</script>