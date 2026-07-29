<template>
  <div class="p-6">
    <DataTable
      :value="users"
      dataKey="name"
      class="w-full text-sm [&_.p-datatable-table]:w-full [&_.p-datatable-thead>tr>th]:border-x-0 [&_.p-datatable-thead>tr>th]:border-t-0 [&_.p-datatable-thead>tr>th]:border-b [&_.p-datatable-thead>tr>th]:border-slate-200 [&_.p-datatable-thead>tr>th]:bg-white [&_.p-datatable-thead>tr>th]:px-3 [&_.p-datatable-thead>tr>th]:py-2 [&_.p-datatable-thead>tr>th]:font-semibold [&_.p-datatable-thead>tr>th]:text-slate-700 [&_.p-datatable-tbody>tr>td]:border-x-0 [&_.p-datatable-tbody>tr>td]:border-b [&_.p-datatable-tbody>tr>td]:border-slate-200 [&_.p-datatable-tbody>tr>td]:bg-white [&_.p-datatable-tbody>tr>td]:px-3 [&_.p-datatable-tbody>tr>td]:py-2"
    >
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="h-7 w-7 bg-slate-200 text-sm text-slate-600"
            />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" class="text-xs font-semibold" />
        </template>
      </Column>

      <Column header="Aktiv" headerClass="w-20" bodyClass="w-20">
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
  { initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
  { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
  { initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
  { initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
])
</script>