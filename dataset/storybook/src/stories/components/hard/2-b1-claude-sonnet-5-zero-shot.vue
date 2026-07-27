<template>
  <div class="w-[716px]">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="role" header="Rolle">
        <template #body="slotProps">
          <Tag :value="slotProps.data.role" :severity="slotProps.data.roleSeverity" />
        </template>
      </Column>

      <Column field="active" header="Aktiv" bodyClass="text-center">
        <template #body="slotProps">
          <Checkbox v-model="slotProps.data.active" :binary="true" disabled />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'

const users = ref([
  {
    name: 'Max Mustermann',
    initial: 'M',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true
  },
  {
    name: 'Anna Schmidt',
    initial: 'A',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true
  },
  {
    name: 'Lisa Weber',
    initial: 'L',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false
  },
  {
    name: 'Paul Müller',
    initial: 'P',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true
  }
])
</script>