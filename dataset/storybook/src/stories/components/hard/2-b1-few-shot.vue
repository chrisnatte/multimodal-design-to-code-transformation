<template>
  <div class="flex flex-col">
    <DataTable :value="rows">
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 py-2.5 px-3.5">
            <Avatar :label="data.initial" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle">
        <template #body="{ data }">
          <div class="flex items-center py-2.5 px-3.5">
            <Tag :value="data.role" :severity="data.severity" />
          </div>
        </template>
      </Column>

      <Column header="Aktiv">
        <template #body="{ data }">
          <div class="flex items-center justify-center py-2.5 px-3.5">
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

const rows = reactive([
  { initial: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
  { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
  { initial: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
  { initial: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true }
])
</script>