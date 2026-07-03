<template>
  <div class="w-full p-6">
    <DataTable
      :value="state.users"
      dataKey="id"
      class="text-sm"
      tableClass="w-full"
      :pt="{
        headerCell: { class: 'bg-transparent text-slate-700 font-semibold border-b border-slate-200' },
        bodyRow: { class: 'border-b border-slate-200' },
        bodyCell: { class: 'py-3' }
      }"
    >
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 pl-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-600" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" />
        </template>
      </Column>

      <Column header="Aktiv" class="w-24">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox v-model="data.active" binary />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const state = reactive({
  users: [
    { id: 1, initials: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
    { id: 2, initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
    { id: 3, initials: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
    { id: 4, initials: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
  ]
})
</script>