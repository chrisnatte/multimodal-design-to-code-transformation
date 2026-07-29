<template>
  <div class="w-full max-w-3xl p-6">
    <DataTable
      :value="users"
      table-class="w-full"
      :pt="{
        table: 'border-collapse',
        headerCell: 'border-b border-slate-200 px-3 py-2 text-left text-sm font-semibold text-slate-700',
        bodyCell: 'border-b border-slate-200 px-3 py-2 text-sm text-slate-700',
      }"
    >
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" class="!text-xs" />
        </template>
      </Column>

      <Column
        header="Aktiv"
        header-class="text-center"
        body-class="text-center"
        :pt="{
          headerCell: 'text-center',
          bodyCell: 'text-center',
        }"
      >
        <template #body="{ data }">
          <Checkbox v-model="data.active" binary :aria-label="`${data.name} aktiv`" />
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
  { initials: 'M', name: 'Max Mustermann', role: 'Administrator', severity: 'danger', active: true },
  { initials: 'A', name: 'Anna Schmidt', role: 'Projektleiter', severity: 'info', active: true },
  { initials: 'L', name: 'Lisa Weber', role: 'Gast', severity: 'warn', active: false },
  { initials: 'P', name: 'Paul Müller', role: 'Gast', severity: 'warn', active: true },
])
</script>