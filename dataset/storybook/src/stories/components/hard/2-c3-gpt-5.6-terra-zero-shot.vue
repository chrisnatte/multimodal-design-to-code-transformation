<template>
  <div class="p-6">
    <DataTable
      :value="users"
      dataKey="id"
      size="small"
      tableStyle="width: 100%; min-width: 44rem"
    >
      <Column header="Nutzer" style="width: 55%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="bg-slate-200 text-sm text-slate-700"
            />
            <span class="text-sm text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" style="width: 35%">
        <template #body="{ data }">
          <Tag
            :value="data.role"
            :severity="data.severity"
            class="text-xs"
          />
        </template>
      </Column>

      <Column header="Aktiv" style="width: 10%" bodyClass="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const users = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger',
    active: true
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    id: 3,
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
    active: false
  },
  {
    id: 4,
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
    active: true
  }
])
</script>