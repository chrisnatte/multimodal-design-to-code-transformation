<template>
  <div class="p-6">
    <DataTable
      :value="users"
      table-style="min-width: 44rem"
      :pt="{
        table: 'border-collapse',
        headerCell: 'border-x-0 border-t-0 px-3 py-2 text-sm',
        bodyCell: 'border-x-0 px-3 py-2 text-sm',
      }"
    >
      <Column header="Nutzer" style="width: 54%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !text-sm" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Rolle" style="width: 35%">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>
      <Column header="Aktiv" style="width: 11%" header-class="text-center" body-class="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary :input-id="`active-${data.initials}`" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const users = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true,
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true,
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false,
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true,
  },
])
</script>