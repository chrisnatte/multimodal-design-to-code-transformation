<template>
  <DataTable
    :value="users"
    :show-gridlines="false"
    :pt="{
      table: 'border-collapse',
      headerCell: 'border-x-0 border-t-0 border-b border-slate-200 !bg-transparent !px-3 !py-2 text-sm font-semibold text-slate-700',
      bodyCell: 'border-x-0 border-t-0 border-b border-slate-200 !bg-transparent !px-3 !py-2',
    }"
  >
    <Column header="Nutzer">
      <template #body="{ data }">
        <div class="flex items-center gap-3">
          <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
          <span class="text-sm text-slate-700">{{ data.name }}</span>
        </div>
      </template>
    </Column>
    <Column header="Rolle">
      <template #body="{ data }">
        <Tag :value="data.role" :severity="data.roleSeverity" class="!px-2 !py-1 !text-xs" />
      </template>
    </Column>
    <Column header="Aktiv" header-class="!text-center" body-class="!text-center">
      <template #body="{ data }">
        <Checkbox v-model="data.active" binary />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'

const users = ref([
  { initial: 'M', name: 'Max Mustermann', role: 'Administrator', roleSeverity: 'danger', active: true },
  { initial: 'A', name: 'Anna Schmidt', role: 'Projektleiter', roleSeverity: 'info', active: true },
  { initial: 'L', name: 'Lisa Weber', role: 'Gast', roleSeverity: 'warn', active: false },
  { initial: 'P', name: 'Paul Müller', role: 'Gast', roleSeverity: 'warn', active: true },
])
</script>