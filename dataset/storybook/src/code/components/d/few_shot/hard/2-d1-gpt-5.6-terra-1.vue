<template>
  <div class="flex w-full max-w-[764px] flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      class="w-full"
      :pt="{
        table: 'border-collapse',
        headerCell: 'border-b border-surface-200 px-3.5 py-2.5 text-sm font-semibold',
        bodyCell: 'h-[50px] border-b border-surface-200 px-3.5 py-2.5 text-sm',
      }"
    >
      <Column header="Nutzer" header-class="w-[54%]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="h-7 w-7 text-sm" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" header-class="w-[31%]">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>

      <Column header="Aktiv" header-class="w-[15%] text-center" body-class="text-center">
        <template #body="{ data }">
          <Checkbox v-model="data.active" :input-id="`active-${data.initials}`" binary />
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