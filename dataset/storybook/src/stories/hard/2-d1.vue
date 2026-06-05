<template>
  <div class="w-full max-w-[760px] px-6 py-5">
    <DataTable
      :value="state.users"
      tableStyle="min-width: 100%"
      class="text-sm"
      :pt="{
        table: { class: 'w-full' },
        headerRow: { class: 'border-b border-slate-200' },
        bodyRow: { class: 'border-b border-slate-200' },
        columnHeaderContent: { class: 'py-3' }
      }"
    >
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 py-2">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-700" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" class="!rounded-md !font-semibold" />
        </template>
      </Column>

      <Column field="active" header="Aktiv" headerClass="text-center" bodyClass="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary />
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
    { initials: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
    { initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
    { initials: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
    { initials: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
  ]
})
</script>