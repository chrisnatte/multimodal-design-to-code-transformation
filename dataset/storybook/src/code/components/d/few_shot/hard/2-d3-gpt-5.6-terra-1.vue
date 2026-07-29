<template>
  <div class="w-[764px] bg-white p-6">
    <DataTable
      :value="users"
      table-style="width: 716px"
      :pt="{
        table: 'border-collapse',
        thead: 'border-b border-slate-200',
        headerCell: 'h-[39px] !border-0 !bg-white !px-3.5 !py-2.5 text-sm font-semibold text-slate-700',
        bodyRow: 'border-b border-slate-200',
        bodyCell: 'h-[50px] !border-0 !bg-white !px-3.5 !py-2.5 text-sm text-slate-700',
      }"
    >
      <Column header="Nutzer" style="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              :pt="{ root: '!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700' }"
            />
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
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox v-model="data.active" binary :input-id="`active-${data.initial}`" />
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
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    roleSeverity: 'danger',
    active: true,
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    roleSeverity: 'info',
    active: true,
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    roleSeverity: 'warn',
    active: false,
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    roleSeverity: 'warn',
    active: true,
  },
])
</script>