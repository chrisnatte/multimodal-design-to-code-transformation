<template>
  <div class="w-full p-6">
    <DataTable :value="state.users" class="w-full" tableStyle="min-width: 100%">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-700" />
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <Tag
            :value="data.roleLabel"
            :severity="data.roleSeverity"
            rounded
          />
        </template>
      </Column>

      <Column field="active" header="Aktiv">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :binary="true" />
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
    {
      initials: 'M',
      name: 'Max Mustermann',
      roleLabel: 'Administrator',
      roleSeverity: 'danger',
      active: true
    },
    {
      initials: 'A',
      name: 'Anna Schmidt',
      roleLabel: 'Projektleiter',
      roleSeverity: 'info',
      active: true
    },
    {
      initials: 'L',
      name: 'Lisa Weber',
      roleLabel: 'Gast',
      roleSeverity: 'warn',
      active: false
    },
    {
      initials: 'P',
      name: 'Paul Müller',
      roleLabel: 'Gast',
      roleSeverity: 'warn',
      active: true
    }
  ]
})
</script>