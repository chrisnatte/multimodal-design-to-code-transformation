<template>
  <div class="flex flex-col">
    <DataTable :value="state.users" tableStyle="min-width: 40rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3 px-3.5 py-2.5">
            <Avatar :label="slotProps.data.initial" shape="circle" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <div class="flex items-center px-3.5 py-2.5">
            <Tag :value="slotProps.data.role" :severity="slotProps.data.roleSeverity" />
          </div>
        </template>
      </Column>
      <Column field="active" header="Aktiv">
        <template #body="slotProps">
          <div class="flex items-center justify-center px-3.5 py-2.5">
            <Checkbox v-model="slotProps.data.active" binary />
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
    { name: 'Max Mustermann', initial: 'M', role: 'Administrator', roleSeverity: 'danger', active: true },
    { name: 'Anna Schmidt', initial: 'A', role: 'Projektleiter', roleSeverity: 'info', active: true },
    { name: 'Lisa Weber', initial: 'L', role: 'Gast', roleSeverity: 'warn', active: false },
    { name: 'Paul Müller', initial: 'P', role: 'Gast', roleSeverity: 'warn', active: true }
  ]
})
</script>