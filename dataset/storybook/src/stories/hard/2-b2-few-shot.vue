<template>
  <div class="flex flex-col">
    <DataTable :value="state.users" tableStyle="min-width: 40rem">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 px-3.5 py-2.5">
            <Avatar :label="data.initials" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="{ data }">
          <div class="flex items-center px-3.5 py-2.5">
            <Tag :value="data.role" :severity="data.roleSeverity" />
          </div>
        </template>
      </Column>

      <Column field="active" header="Aktiv">
        <template #body="{ data }">
          <div class="flex items-center justify-center px-3.5 py-2.5">
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
    { initials: 'M', name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
    { initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
    { initials: 'L', name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
    { initials: 'P', name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true }
  ]
})
</script>