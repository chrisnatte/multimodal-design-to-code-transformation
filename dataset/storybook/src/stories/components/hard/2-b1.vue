<template>
  <div class="flex flex-col border border-surface-200 rounded-md overflow-hidden">
    <DataTable :value="state.users" tableStyle="min-width: 48rem">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 px-3.5 py-2.5">
            <Avatar :label="data.avatar" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
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
        <template #body="{ data, index }">
          <div class="flex items-center justify-center px-3.5 py-2.5">
            <Checkbox v-model="state.users[index].active" :binary="true" />
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
    { avatar: 'M', name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
    { avatar: 'A', name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
    { avatar: 'L', name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
    { avatar: 'P', name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true }
  ]
})
</script>