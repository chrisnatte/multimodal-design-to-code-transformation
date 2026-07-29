<template>
  <div class="flex w-full max-w-[764px] flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      show-gridlines
      table-style="width: 100%; table-layout: fixed"
      :pt="{
        table: 'border-collapse',
        headerCell: 'bg-white px-3.5 py-2.5 text-sm font-semibold',
        bodyCell: 'px-3.5 py-2.5',
      }"
    >
      <Column header="Nutzer" header-style="width: 53.63%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" header-style="width: 31.28%">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>

      <Column header="Aktiv" header-style="width: 15.09%" body-class="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary :input-id="`user-${data.initials}`" />
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