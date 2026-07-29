<template>
  <div class="w-[764px] bg-white p-6">
    <DataTable
      :value="users"
      table-style="width: 716px"
      :pt="{
        table: 'border-collapse',
        headerCell: 'h-[39px] border-b border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700',
        bodyCell: 'h-[50px] border-b border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700',
      }"
    >
      <Column header="Nutzer" style="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" style="width: 224px">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.roleSeverity" />
        </template>
      </Column>

      <Column header="Aktiv" style="width: 108px">
        <template #body="{ data, index }">
          <div class="flex justify-center">
            <Checkbox
              v-model="users[index].active"
              :input-id="`user-active-${index}`"
              binary
              :aria-label="`${data.name} aktiv`"
            />
          </div>
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