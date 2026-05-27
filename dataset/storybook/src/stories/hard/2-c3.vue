<template>
  <div class="p-6">
    <DataTable
      :value="state.users"
      tableStyle="min-width: 46rem"
      class="w-full"
      :showGridlines="false"
    >
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar
              :label="slotProps.data.initial"
              shape="circle"
              class="bg-slate-200 text-slate-600"
              size="normal"
            />
            <span class="text-slate-700">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.role"
            :severity="slotProps.data.roleSeverity"
            rounded
          />
        </template>
      </Column>

      <Column field="active" header="Aktiv">
        <template #body="slotProps">
          <div class="flex justify-start">
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
    { id: 1, initial: 'M', name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
    { id: 2, initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
    { id: 3, initial: 'L', name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
    { id: 4, initial: 'P', name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true }
  ]
})
</script>