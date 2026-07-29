<template>
  <div class="flex w-[764px] max-w-full flex-col gap-2.5 bg-white p-6">
    <DataTable
      :value="users"
      dataKey="name"
      class="w-full"
      :pt="{
        table: { class: 'w-full' },
        headerCell: { class: 'h-[39px] border-x-0 border-t-0 border-b border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700' },
        bodyCell: { class: 'h-[50px] border-x-0 border-t-0 border-b border-slate-200 bg-white px-3.5 py-[10.5px] text-sm text-slate-700' }
      }"
    >
      <Column header="Nutzer" headerStyle="width: 384px" bodyStyle="width: 384px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Rolle" headerStyle="width: 224px" bodyStyle="width: 224px">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="data.severity" class="!text-xs" />
        </template>
      </Column>

      <Column
        header="Aktiv"
        headerStyle="width: 108px; text-align: center"
        bodyStyle="width: 108px; text-align: center"
      >
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox v-model="data.active" binary :aria-label="`${data.name} aktiv`" />
          </div>
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
    initial: 'M',
    name: 'Max Mustermann',
    role: 'Administrator',
    severity: 'danger',
    active: true
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    role: 'Projektleiter',
    severity: 'info',
    active: true
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    role: 'Gast',
    severity: 'warn',
    active: false
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    role: 'Gast',
    severity: 'warn',
    active: true
  }
])
</script>